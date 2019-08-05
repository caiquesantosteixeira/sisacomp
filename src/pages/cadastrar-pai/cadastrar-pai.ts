
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { PaisProvider } from './../../providers/pais/pais';
import { responsavel } from '../../Models/responsavel';
/**
/**
 * Generated class for the CadastrarPaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-pai',
  templateUrl: 'cadastrar-pai.html',
})
export class CadastrarPaiPage {
  public cadastroForm : any;
  public pai = new responsavel();

  public  messageNome :string
  public  messageCpf:string
  public  messageEndereco :string
  public  messageTelefone :string
  public  messageSenha :string

  public  errorNome :boolean = false;
  public  errorCpf:boolean= false;
  public  errorEndereco :boolean= false;
  public  errorTelefone :boolean= false;
  public  errorSenha :boolean= false;

  public isPai = new responsavel();


  public titulo:string;
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public resposavelProvider:PaisProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isPai = this.navParams.get("pai");
    if(this.isPai == undefined){
      this.cadastroForm = formBuilder.group({
        Nome: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
        Cpf: ['',Validators.compose ( [Validators.minLength(14),Validators.maxLength(14),  Validators.required])],
        Endereco: ['',[Validators.required]],
        Telefone: ['',Validators.compose ( [Validators.minLength(13),Validators.maxLength(13),  Validators.required])],
        Senha: ['',[Validators.required]],
      });

      this.titulo = "Cadastrar pai"
    }else{
      this.cadastroForm = formBuilder.group({
        Nome: [this.isPai.nome, Validators.compose( [Validators.maxLength(70), Validators.required])],
        Cpf: [this.isPai.cpf ,Validators.compose ( [Validators.minLength(14),Validators.maxLength(14),  Validators.required])],
        Endereco: [this.isPai.endereco,[Validators.required]],
        Telefone: [this.isPai.telefone,Validators.compose ( [Validators.minLength(13),Validators.maxLength(13),  Validators.required])],
        Senha: [this.isPai.senha,[Validators.required]],
      });
      this.titulo = "Editar pai"
    }
  }

  cadastrar(){
    let { Nome, Cpf, Endereco, Telefone,Senha } = this.cadastroForm.controls;

    if (!this.cadastroForm.valid) {
      if (!Nome.valid) {
        this.errorNome = true;
        this.messageNome = "Ops! Nome inválido";
      } else {
        this.messageNome = "";
      }

      if (!Cpf.valid) {
        this.errorCpf = true;
        this.messageCpf = "Ops! Tamanho do CPF inválido";
      } else {
        this.messageCpf = "";
      }

      if (!Endereco.valid) {
        this.errorEndereco = true;
        this.messageEndereco = "Ops! Endereço inválido";
      } else {
        this.messageEndereco = "";
      }

      if (!Telefone.valid) {
        this.errorTelefone = true;
        this.messageTelefone= "Ops! Telefone inváldo";
      } else {
        this.messageTelefone = "";
      }

      if (!Senha.valid) {
        this.errorSenha = true;
        this.messageSenha= "Ops! Senha inválida";
      } else {
        this.messageSenha = "";
      }

      
    }
    else {

      this.pai.nome = Nome.value;
      this.pai.cpf = Cpf.value;
      this.pai.endereco = Endereco.value;
      this.pai.telefone = Telefone.value;
      this.pai.senha = Senha.value;
      this.pai.ativo = 1;
      this.Abrecarregamento("carreganddo");

      if(this.isPai == undefined){
        this.resposavelProvider.postPai(this.pai).subscribe(
          data => {
            this.FechaCarregamento();
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);
            
            if(response.status == 200){
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
        this.pai.idResponsavel = this.isPai.idResponsavel;
        this.resposavelProvider.putPai(this.pai).subscribe(
          data => {
            this.FechaCarregamento();
            const response = (data as any);
            //const objeto_retorno = JSON.parse(response._body);
            if(response.status == 200){
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
