import { ProfessorMateriaProvider } from './../../providers/professor-materia/professor-materia';
import { ProfessorProvider } from './../../providers/professor/professor';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { professorMateria } from '../../Models/professorMateria';
import { materia } from '../../Models/materia';
import { professor } from '../../Models/professor';
import { MateriaProvider } from '../../providers/materia/materia';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the VincularProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vincular-professor',
  templateUrl: 'vincular-professor.html',
})
export class VincularProfessorPage {
  public cadastroForm : any;
  public professorMateria = new professorMateria();

  public  messageNome :string
  public  messageTurma :string

  public  errorNome :boolean = false;

  public materia = new materia();

  public professores = new Array<professor>();


  public isProfessorMateria = new professorMateria();

  public titulo:string;
  public loader:Loading ;
  constructor(public professorMateriaProvider:ProfessorMateriaProvider,public professorProvider:ProfessorProvider,public alertController:AlertController, public loadingCtrl:LoadingController,public materiaProvider:MateriaProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    
    this.materia = this.navParams.get("materia");
    
    if( this.materia.idProfessorMateria == undefined){
      this.cadastroForm = this.formBuilder.group({
        idProfessor: ['', Validators.compose( [Validators.maxLength(70), Validators.required])]
      });
      this.titulo="Vincular Professor"
    }else{
      this.cadastroForm = this.formBuilder.group({
        idProfessor: [  this.materia.idProfessorMateria.idProfessor, Validators.compose( [Validators.maxLength(70), Validators.required])]
      });
      this.titulo="Atualizar Professor"
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VincularProfessorPage');
    this.Abrecarregamento("carregando turmas...");
          this.professorProvider.getProfessor().subscribe(
            async data => {
              this.FechaCarregamento();
              const response = (data as any);
              const objeto_retorno = JSON.parse(response._body);
              if(response.status == 200){
                this.professores = objeto_retorno;


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

  cadastrar(){
    let { idProfessor } = this.cadastroForm.controls;

    if (!this.cadastroForm.valid) {
      if (!idProfessor.valid) {
        this.errorNome = true;
        this.messageNome = "Ops! Nome inválido";
      } else {
        this.messageNome = "";
      }
      
    }
    else {

      this.professorMateria.idMateria =   this.materia.idMateria;
      this.professorMateria.idProfessor = idProfessor.value;
      
      this.Abrecarregamento("carreganddo");

      if(this.materia.idProfessorMateria == null){
        this.professorMateria.ativo = 1;
        this.professorMateriaProvider.postProfessorMateria(this.professorMateria).subscribe(
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
        
        this.professorMateria.id =  this.materia.idProfessorMateria.id;
        this.professorMateriaProvider.putProfessorMateria(this.professorMateria).subscribe(
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
