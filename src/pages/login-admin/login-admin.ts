import { TabsPage } from './../tabs/tabs';
import { AdministradorProvider } from './../../providers/administrador/administrador';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-admin',
  templateUrl: 'login-admin.html',
})
export class LoginAdminPage {

  public cpf:string;
  public senha:string;

  public loader:Loading ;

  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public administradorProvider:AdministradorProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    
  }

  Login(){
    this.Abrecarregamento("carreagando");
    this.administradorProvider.Login(this.cpf,this.senha).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          if(objeto_retorno.length > 0){
            this.navCtrl.setRoot(TabsPage);
          }else{
            this.exibirMensagem("Login ou senha incorretos.")
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
