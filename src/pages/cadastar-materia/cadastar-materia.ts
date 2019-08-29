import { MateriaTurmaProvider } from './../../providers/materia-turma/materia-turma';
import { MateriaProvider } from './../../providers/materia/materia';
import { turma } from './../../Models/turma';
import { TurmasProvider } from './../../providers/turmas/turmas';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { materia } from '../../Models/materia';
import { materiaTurma } from '../../Models/materiaTurma';

/**
 * Generated class for the CadastarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastar-materia',
  templateUrl: 'cadastar-materia.html',
})
export class CadastarMateriaPage {
  public cadastroForm : any;
  public materiaTurma = new materiaTurma();

  public  messageNome :string
  public  messageTurma :string

  public  errorNome :boolean = false;
  
  public isMateria = new materia();
  

  public materias = new Array<materia>();

  public turma = new turma();

  public titulo:string;

  public loader:Loading ;
  constructor(public materiaTurmaProvider:MateriaTurmaProvider,public MateriaProvider:MateriaProvider, public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController,public materiaProvider:MateriaProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isMateria = this.navParams.get("materia");

    this.turma = this.navParams.get("turma");

    this.cadastroForm = this.formBuilder.group({
      idMateria: ['', Validators.compose( [Validators.maxLength(70), Validators.required])]
    });
    

    

          this.Abrecarregamento("carregando turmas...");
          this.MateriaProvider.getMateria().subscribe(
            async data => {
              this.FechaCarregamento();
              const response = (data as any);
              const objeto_retorno = JSON.parse(response._body);
              if(response.status == 200){
                this.materias = objeto_retorno;
                
                if(this.isMateria == undefined){
                  this.cadastroForm = this.formBuilder.group({
                    idMateria: [ this.materias[0].idMateria, Validators.compose( [Validators.maxLength(70), Validators.required])]
                  });
                  this.titulo = "Cadastrar Matéria"
                }else{
                  this.cadastroForm = this.formBuilder.group({
                    idMateria: [this.isMateria.idMateria, Validators.compose( [Validators.maxLength(70), Validators.required])]
                  });
                  this.titulo = "Editar Matéria"
                }

              }else{
                if(response.status == 500){
                  this.exibirMensagem('Erro interno no servidor');
                }else{
                  this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
              }
            }, error => {
              this.FechaCarregamento();
              this.exibirMensagem('falha ao tentar se comunicar com o servidor');
              console.log(error)
            }
          )



  }

  getTurmas(){
    
  }

  cadastrar(){
    let { idMateria } = this.cadastroForm.controls;

    if (!this.cadastroForm.valid) {
      if (!idMateria.valid) {
        this.errorNome = true;
        this.messageNome = "Ops! Nome inválido";
      } else {
        this.messageNome = "";
      }
      
    }
    else {

      this.materiaTurma.idMateria = idMateria.value;
      this.materiaTurma.idTurma = this.turma.idTurma;
      
      this.Abrecarregamento("carreganddo");

      if(this.isMateria == undefined){
        this.materiaTurma.ativo = 1;
        this.materiaTurmaProvider.postMateriaTurma(this.materiaTurma).subscribe(
          data => {
            this.FechaCarregamento();
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);
            
            if(response.status == 201){
              if(objeto_retorno.situacao =="Cpf repetido"){
                this.exibirMensagem("Cpf já existe em outro usuário!")
                return;
              }
              this.exibirMensagem("Cadastro realizado com sucesso!")
              this.navCtrl.pop();
            }else{
              if(response.status == 500){
                this.exibirMensagem('Erro interno no servidor');
              }else{
                this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
              }
            }
    
          }, error => {
            this.FechaCarregamento();
            this.exibirMensagem('falha ao tetar se comunicar com o servidor');
            console.log(error)
          })

      }else{
        
        this.materiaTurma.id = this.isMateria.idMateriaTurma;
        this.materiaTurmaProvider.putMateriaTurma(this.materiaTurma).subscribe(
          data => {
            this.FechaCarregamento();
            const response = (data as any);
            //const objeto_retorno = JSON.parse(response._body);
            if(response.status == 204){
              this.exibirMensagem("Edição realizada com sucesso!")
              this.navCtrl.pop();
            }else{
              if(response.status == 500){
                this.exibirMensagem('Erro interno no servidor');
              }else{
                this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
              }
            }
    
          }, error => {
            this.FechaCarregamento();
            this.exibirMensagem('falha ao tetar se comunicar com o servidor');
            console.log(error)
          })
      }
    }
  }




  Abrecarregamento(msg:string){

    this.loader = this.loadingCtrl.create({
      content: msg,
    });
    this.loader.present();
  }

  FechaCarregamento(){
    this.loader.dismiss();
  }

  exibirMensagem(msg:string){
    let alert = this.alertController.create({
      title: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
