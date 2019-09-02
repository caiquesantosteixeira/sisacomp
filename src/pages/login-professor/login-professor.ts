import { professor } from './../../Models/professor';
import { turma } from './../../Models/turma';
import { TabProfessorPage } from './../tab-professor/tab-professor';
import { ProfessorProvider } from './../../providers/professor/professor';
import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { TabResponsavelPage } from '../tab-responsavel/tab-responsavel';

/**
 * Generated class for the LoginProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-professor',
  templateUrl: 'login-professor.html',
})
export class LoginProfessorPage {

  
  public cpf:string;
  public senha:string;

  public loader:Loading ;

  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public professorProvider:ProfessorProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginProfessorPage');
  }

  Login(){
    this.Abrecarregamento("carreagando");
    this.professorProvider.Login(this.cpf,this.senha).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
        
          if(objeto_retorno.length > 0){
            MyApp.professor = objeto_retorno;
            this.navCtrl.setRoot(TabProfessorPage);
          }else{
            this.exibirMensagem('login ou senha incorretos');
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
