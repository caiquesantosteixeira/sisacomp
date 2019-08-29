import { professor } from './../../Models/professor';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfessorProvider } from './../../providers/professor/professor';
import { responsavel } from '../../Models/responsavel';

/**
 * Generated class for the CadastrarProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-professor',
  templateUrl: 'cadastrar-professor.html',
})
export class CadastrarProfessorPage {
  public cadastroForm : any;
  public professor = new professor();

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

  public isProfessor = new professor();


  public titulo:string;
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public resposavelProvider:ProfessorProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isProfessor = this.navParams.get("professor");
    if(this.isProfessor == undefined){
      this.cadastroForm = formBuilder.group({
        Nome: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
        Cpf: ['',Validators.compose ( [Validators.minLength(14),Validators.maxLength(14),  Validators.required])],
        Telefone: ['',Validators.compose ( [Validators.minLength(13),Validators.maxLength(13),  Validators.required])],
        Senha: ['',[Validators.required]],
      });

      this.titulo = "Cadastrar Professor"
    }else{
      this.cadastroForm = formBuilder.group({
        Nome: [this.isProfessor.nome, Validators.compose( [Validators.maxLength(70), Validators.required])],
        Cpf: [this.isProfessor.cpf ,Validators.compose ( [Validators.minLength(14),Validators.maxLength(14),  Validators.required])],
        Telefone: [this.isProfessor.telefone,Validators.compose ( [Validators.minLength(13),Validators.maxLength(13),  Validators.required])],
        Senha: [this.isProfessor.senha,[Validators.required]],
      });
      this.titulo = "Editar Professor"
    }
  }

  cadastrar(){
    let { Nome, Cpf, Telefone,Senha } = this.cadastroForm.controls;

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

      this.professor.nome = Nome.value;
      this.professor.cpf = Cpf.value;
      this.professor.telefone = Telefone.value;
      this.professor.senha = Senha.value;
      this.professor.ativo = 1;
      this.Abrecarregamento("carreganddo");

      if(this.isProfessor == undefined){
        this.resposavelProvider.postProfessor(this.professor).subscribe(
          data => {
            this.FechaCarregamento();
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);
            
            if(response.status == 201){
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
        this.professor.idProfessor = this.isProfessor.idProfessor;
        this.resposavelProvider.putProfessor(this.professor).subscribe(
          data => {
            this.FechaCarregamento();
            const response = (data as any);
            //const objeto_retorno = JSON.parse(response._body);
            if(response.status == 201){
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
