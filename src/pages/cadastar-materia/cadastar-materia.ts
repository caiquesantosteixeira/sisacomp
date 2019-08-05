import { MateriaProvider } from './../../providers/materia/materia';
import { turma } from './../../Models/turma';
import { TurmasProvider } from './../../providers/turmas/turmas';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { aluno } from '../../Models/aluno';

import { materia } from '../../Models/materia';

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
  public materia = new materia();

  public  messageNome :string
  public  messageTurma :string

  public  errorNome :boolean = false;
  public  errorTurma :boolean= false;

  public turmas = new Array<turma>();
  public isMateria = new materia();
  

  public titulo:string;

  public loader:Loading ;
  constructor(public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController,public materiaProvider:MateriaProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isMateria = this.navParams.get("materia");

    var turma = this.navParams.get("turma");

    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
      idTurma: ['',[Validators.required]]
    });
    

    this.Abrecarregamento("carregando...");
    this.turmasProvider.getTurmas().subscribe(
      async data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.turmas = objeto_retorno;

          for(var x = 0; x< this.turmas.length; x++){
            if(this.turmas[x].turno == 0){
              this.turmas[x].turnoTexto = "manhã"
            }else if(this.turmas[x].turno == 1){
              this.turmas[x].turnoTexto = "Tarde"
            }else if(this.turmas[x].turno == 2){
              this.turmas[x].turnoTexto = "Noite"
            }

            if(this.turmas[x].tipoSerie == 0){
              this.turmas[x].tipoSerieTexto = "Pré-esc."

            }else if(this.turmas[x].tipoSerie == 1){
              this.turmas[x].tipoSerieTexto = "Fundamental"
              
            }else if(this.turmas[x].tipoSerie == 2){
              this.turmas[x].tipoSerieTexto = "Médio"
            }

          }

          

          if(this.isMateria == undefined){
            this.cadastroForm = this.formBuilder.group({
              nome: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
              idTurma: [ this.turmas[0].idTurma,[Validators.required]]
            });

            this.titulo = "Cadastrar Aluno"
          }else{
            this.cadastroForm = this.formBuilder.group({
              nome: [this.isMateria.nome, Validators.compose( [Validators.maxLength(70), Validators.required])],
              idTurma: [turma.idTurma,[Validators.required]]
            });
            this.titulo = "Editar Aluno"
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
    let { nome,idTurma } = this.cadastroForm.controls;

    if (!this.cadastroForm.valid) {
      if (!nome.valid) {
        this.errorNome = true;
        this.messageNome = "Ops! Nome inválido";
      } else {
        this.messageNome = "";
      }

      if (idTurma.valid) {
        this.errorTurma = true;
        this.messageTurma= "Ops! Turma inválida";
      } else {
        this.messageTurma= "";
      }

      
    }
    else {

      this.materia.nome = nome.value;

      this.materia.idTurma = idTurma.value;
      
      this.Abrecarregamento("carreganddo");

      if(this.isMateria == undefined){
        this.materia.ativo = 1;
        this.materiaProvider.postMateria(this.materia).subscribe(
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
        
        this.materia.idMateria = this.isMateria.idMateria;
        this.materiaProvider.putMateria(this.materia).subscribe(
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
