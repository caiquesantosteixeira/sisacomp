import { CadastrarTurmasPage } from './../cadastrar-turmas/cadastrar-turmas';
import { TurmasProvider } from './../../providers/turmas/turmas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { turma } from '../../Models/turma';

/**
 * Generated class for the TurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turmas',
  templateUrl: 'turmas.html',
})
export class TurmasPage {

  public turmas = new Array<turma>();
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public turmasProvider:TurmasProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TurmasPage');
    this.Abrecarregamento("carreagando");
    this.turmasProvider.getTurmas().subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.turmas = objeto_retorno;
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


  ativar(turma:turma){
    if(turma.ativo == 0){
      turma.ativo = 1;
    }else{
      turma.ativo = 0;
    }

        this.Abrecarregamento("carreganddo");

          this.turmasProvider.putTurma(turma).subscribe(
            data => {
              this.FechaCarregamento();
              const response = (data as any);
              //const objeto_retorno = JSON.parse(response._body);
              if(response.status == 204){
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

              if(turma.ativo == 1){
                turma.ativo = 0;
              }else{
                turma.ativo = 1;
              }

              this.FechaCarregamento();
              this.exibirMensagem('falha ao tentar se comunicar com o servidor');
              console.log(error)
          })
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

  goCadastro(){
    this.navCtrl.push(CadastrarTurmasPage, );
  }

  goEditar(turma:turma){
    this.navCtrl.push(CadastrarTurmasPage, {turma:turma});
  }
}
