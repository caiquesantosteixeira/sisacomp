import { CadastrarProfessorPage } from './../cadastrar-professor/cadastrar-professor';
import { professor } from './../../Models/professor';
import { ProfessorProvider } from './../../providers/professor/professor';
import { CadastrarPaiPage } from './../cadastrar-pai/cadastrar-pai';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';




/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professores',
  templateUrl: 'professores.html',
})
export class ProfessoresPage{
  //public turma = new turma();
  //public materia = new materia();
  public professores = new Array<professor>();
  public professor = new professor();
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public professorProvider:ProfessorProvider, public navCtrl: NavController, public navParams: NavParams) {
    //this.turma = this.navParams.get("turma");
    //this.materia = this.navParams.get("materia");
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.professorProvider.getProfessor().subscribe(
      data => {
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
  
  ativar(professor:professor){
    if(professor.ativo == 0){
      professor.ativo = 1;
    }else{
      professor.ativo = 0;
    }

        this.Abrecarregamento("carreganddo");

          this.professorProvider.putProfessor(professor).subscribe(
            data => {
              this.FechaCarregamento();
              const response = (data as any);
              //const objeto_retorno = JSON.parse(response._body);
              if(response.status == 201){
                this.exibirMensagem("Operação realizado com sucesso!")
                //this.navCtrl.setRoot(TurmasPage);
              }else{
                if(response.status == 500){
                  this.exibirMensagem('Erro interno no servidor');
                }else{
                  this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
              }
      
            }, error => {
              this.exibirMensagem('falha ao tentar se comunicar com o servidor');
              if(professor.ativo == 1){
                professor.ativo = 0;
              }else{
                professor.ativo = 1;
              }

              this.FechaCarregamento();
              console.log(error)
          })
  }

  goCadastro(){
    this.navCtrl.push(CadastrarProfessorPage)

  }

  goEditar(professor:professor){
    this.navCtrl.push(CadastrarProfessorPage,{professor:professor})
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
