import { NoticiasProvider } from './../../providers/noticias/noticias';
import { AgendaProvider } from './../../providers/agenda/agenda';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { noticia } from '../../Models/noticia';


/**
 * Generated class for the CadastrarNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-noticia',
  templateUrl: 'cadastrar-noticia.html',
})
export class CadastrarNoticiaPage {

  public cadastroForm : any;
  public noticia = new noticia();

  public  messageTitulo :string
  public  messageTexto:string
 
  public  errorTitulo :boolean = false;
  public  errorTexto:boolean= false;
  
  public isNoticia = new noticia();


  public titulo:string;
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public noticiasProvider:NoticiasProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isNoticia = this.navParams.get("noticia");

    if(this.isNoticia == undefined){
      this.cadastroForm = formBuilder.group({
        titulo: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
        texto: ['',Validators.compose ( [Validators.minLength(1),Validators.maxLength(400),  Validators.required])],
      
      });

      this.titulo = "Cadastrar Notícia"
    }else{
      this.cadastroForm = formBuilder.group({
        titulo: [this.isNoticia.titulo, Validators.compose( [Validators.maxLength(70), Validators.required])],
        texto: [this.isNoticia.texto ,Validators.compose ( [Validators.minLength(1),Validators.maxLength(400),  Validators.required])],
     
      });
      this.titulo = "Editar Notícia"
    }
  }

  cadastrar(){
      let { titulo, texto } = this.cadastroForm.controls;

      if (!this.cadastroForm.valid) {
        if (!titulo.valid) {
          this.errorTitulo = true;
          this.messageTitulo = "Ops! titulo inválido";
        } else {
          this.messageTitulo = "";
        }

        if (!texto.valid) {
          this.errorTexto = true;
          this.messageTexto = "Ops! texto inválido";
        } else {
          this.messageTexto = "";
        }


        
      }
      else {

        this.noticia.titulo = titulo.value;
        this.noticia.texto = texto.value;
        this.Abrecarregamento("carreganddo");

        if(this.isNoticia == undefined){
          this.noticiasProvider.postNoticia(this.noticia).subscribe(
            data => {
              this.FechaCarregamento();
              const response = (data as any);
              const objeto_retorno = JSON.parse(response._body);
              
              if(response.status == 201){
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
          this.noticia.idNoticia = this.isNoticia.idNoticia;
          this.noticiasProvider.putNoticia(this.noticia).subscribe(
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPaiPage');
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
