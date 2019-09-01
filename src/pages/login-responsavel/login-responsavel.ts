import { MyApp } from './../../app/app.component';
import { PaisProvider } from './../../providers/pais/pais';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { TabResponsavelPage } from '../tab-responsavel/tab-responsavel';

/**
 * Generated class for the LoginResponsavelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-responsavel',
  templateUrl: 'login-responsavel.html',
})
export class LoginResponsavelPage {

  public cpf:string;
  public senha:string;

  public loader:Loading ;

  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public paisProvider:PaisProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    
  }

  Login(){
    this.Abrecarregamento("carreagando");
    this.paisProvider.Login(this.cpf,this.senha).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          if(objeto_retorno != null && objeto_retorno != undefined){
            if(objeto_retorno.filho.length > 0){
              MyApp.filhos = objeto_retorno.filho;
              this.navCtrl.setRoot(TabResponsavelPage);
            }else{
              this.exibirMensagem("Responsável não tem filhos cadastrados;")

            }
          }
        }else{
          this.exibirMensagem('login ou senha incorretos');
        }

      }, error => {
        this.FechaCarregamento();
        this.exibirMensagem('falha ao tentar se comunicar com o servidor');
        console.log(error)
      }
    )
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
