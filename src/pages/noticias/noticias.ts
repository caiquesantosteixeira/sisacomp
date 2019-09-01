import { CadastrarNoticiaPage } from './../cadastrar-noticia/cadastrar-noticia';
import { NoticiasProvider } from './../../providers/noticias/noticias';
import { agenda } from './../../Models/Agenda';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { noticia } from '../../Models/noticia';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  public noticias = new Array<noticia>();
  public noticia = new noticia();
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public noticiasProvider:NoticiasProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.noticiasProvider.getNoticias().subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.noticias = objeto_retorno;
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

  remover(agendas:agenda){
    
  }

  goCadastro(){
    this.navCtrl.push(CadastrarNoticiaPage)
  }

  goEditar(noticia:noticia){
    this.navCtrl.push(CadastrarNoticiaPage, {noticia:noticia})
  }

  delete(noticia:noticia){

    this.Abrecarregamento("carreganddo");
  
      this.noticiasProvider.DeleteNoticias(noticia).subscribe(
        data => {
          this.FechaCarregamento();
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          
          if(response.status == 200){
            this.exibirMensagem("Delete realizado com sucesso!")
            this.noticias = this.noticias.filter(a => a.idNoticia != noticia.idNoticia);
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
