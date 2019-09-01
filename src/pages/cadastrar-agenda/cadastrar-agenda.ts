import { AgendaProvider } from './../../providers/agenda/agenda';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { agenda } from '../../Models/Agenda';
import { turma } from '../../Models/turma';

/**
 * Generated class for the CadastrarAgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-agenda',
  templateUrl: 'cadastrar-agenda.html',
})
export class CadastrarAgendaPage {

  public cadastroForm : any;
  public agenda = new agenda();

  public  messageTitulo :string
  public  messageTexto:string
 
  public  errorTitulo :boolean = false;
  public  errorTexto:boolean= false;
  
  public isAgenda = new agenda();
  public turma = new turma();

  public titulo:string;
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public agendaProvider:AgendaProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isAgenda = this.navParams.get("agenda");
    this.turma = this.navParams.get("turma");
    if(this.isAgenda == undefined){
      this.cadastroForm = formBuilder.group({
        titulo: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
        texto: ['',Validators.compose ( [Validators.minLength(1),Validators.maxLength(400),  Validators.required])],
      
      });

      this.titulo = "Cadastrar Agenda"
    }else{
      this.cadastroForm = formBuilder.group({
        titulo: [this.isAgenda.titulo, Validators.compose( [Validators.maxLength(70), Validators.required])],
        texto: [this.isAgenda.texto ,Validators.compose ( [Validators.minLength(1),Validators.maxLength(400),  Validators.required])],
     
      });
      this.titulo = "Editar Agenda"
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

        this.agenda.titulo = titulo.value;
        this.agenda.texto = texto.value;
        this.agenda.idTurma = this.turma.idTurma;
        this.Abrecarregamento("carreganddo");

        if(this.isAgenda == undefined){
          this.agendaProvider.postAgenda(this.agenda).subscribe(
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
          this.agenda.idAgenda = this.isAgenda.idAgenda;
          this.agendaProvider.putAgenda(this.agenda).subscribe(
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
