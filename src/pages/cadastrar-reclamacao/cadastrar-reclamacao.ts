
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { reclamacao } from '../../Models/reclamacao';
import { ReclamacaoProvider } from '../../providers/reclamacao/reclamacao';
import { aluno } from '../../Models/aluno';

/**
 * Generated class for the CadastrarReclamacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-reclamacao',
  templateUrl: 'cadastrar-reclamacao.html',
})
export class CadastrarReclamacaoPage {
  public cadastroForm : any;
  public reclamacao = new reclamacao();

  public  messageTitulo :string
  public  messageTexto:string
 
  public  errorTitulo :boolean = false;
  public  errorTexto:boolean= false;
  
  public isReclamacao = new reclamacao();
  public aluno = new aluno();

  public titulo:string;
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public reclamacaoProvider:ReclamacaoProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isReclamacao = this.navParams.get("reclamacao");
    this.aluno = this.navParams.get("aluno");
    if(this.isReclamacao == undefined){
      this.cadastroForm = formBuilder.group({
        titulo: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
        texto: ['',Validators.compose ( [Validators.minLength(1),Validators.maxLength(400),  Validators.required])],
      
      });

      this.titulo = "Cadastrar reclamação"
    }else{
      this.cadastroForm = formBuilder.group({
        titulo: [this.isReclamacao.titulo, Validators.compose( [Validators.maxLength(70), Validators.required])],
        texto: [this.isReclamacao.texto ,Validators.compose ( [Validators.minLength(1),Validators.maxLength(400),  Validators.required])],
     
      });
      this.titulo = "Editar reclamação"
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

      this.reclamacao.titulo = titulo.value;
      this.reclamacao.texto = texto.value;
      this.reclamacao.idAluno = this.aluno.idAluno;
      this.Abrecarregamento("carreganddo");

      if(this.isReclamacao == undefined){
        this.reclamacaoProvider.postReclamacao(this.reclamacao).subscribe(
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
        this.reclamacao.idReclamacao = this.isReclamacao.idReclamacao;
        this.reclamacaoProvider.putReclamacao(this.reclamacao).subscribe(
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
