import { turma } from './../../Models/turma';
import { TurmasProvider } from './../../providers/turmas/turmas';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { aluno } from '../../Models/aluno';
import { responsavel } from '../../Models/responsavel';

/**
 * Generated class for the CadastarAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastar-aluno',
  templateUrl: 'cadastar-aluno.html',
})
export class CadastarAlunoPage {

  public cadastroForm : any;
  public aluno = new aluno();

  public  messageNome :string
  public  messageCpf:string
  public  messageTelefone :string
  public  messageTurma :string

  public  errorNome :boolean = false;
  public  errorCpf:boolean= false;
  public  errorTelefone :boolean= false;
  public  errorTurma :boolean= false;

  public pai = new responsavel();
  public isAluno = new aluno();
  public turmas = new Array<turma>();

  public titulo:string;

  public loader:Loading ;
  constructor(public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController,public alunosProvider:AlunoProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.pai = this.navParams.get("pai");
    this.isAluno = this.navParams.get("aluno");

    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
      cpf: ['' ,Validators.compose ( [Validators.minLength(14),Validators.maxLength(14),  Validators.required])],
      telefone: ['',Validators.compose ( [Validators.minLength(13),Validators.maxLength(13),  Validators.required])],
      idTurma: ['',[Validators.required]]
    });
    

    this.Abrecarregamento("carregando...");
    this.turmasProvider.getTurmas().subscribe(
      async data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.turmas = objeto_retorno;

          for(var x = 0; x< this.turmas.length; x++){
            if(this.turmas[x].turno == 0){
              this.turmas[x].turnoTexto = "manhã"
            }else if(this.turmas[x].turno == 1){
              this.turmas[x].turnoTexto = "Tarde"
            }else if(this.turmas[x].turno == 2){
              this.turmas[x].turnoTexto = "Noite"
            }

            if(this.turmas[x].tipoSerie == 0){
              this.turmas[x].tipoSerieTexto = "Pré-esc."

            }else if(this.turmas[x].tipoSerie == 1){
              this.turmas[x].tipoSerieTexto = "Fundamental"
              
            }else if(this.turmas[x].tipoSerie == 2){
              this.turmas[x].tipoSerieTexto = "Médio"
            }

          }

          

          if(this.isAluno == undefined){
            this.cadastroForm = this.formBuilder.group({
              nome: ['', Validators.compose( [Validators.maxLength(70), Validators.required])],
              cpf: ['' ,Validators.compose ( [Validators.minLength(14),Validators.maxLength(14),  Validators.required])],
              telefone: ['',Validators.compose ( [Validators.minLength(13),Validators.maxLength(13),  Validators.required])],
              idTurma: [ this.turmas[0].idTurma,[Validators.required]]
            });

            this.titulo = "Cadastrar Aluno"
          }else{
            this.cadastroForm = this.formBuilder.group({
              nome: [this.isAluno.nome, Validators.compose( [Validators.maxLength(70), Validators.required])],
              cpf: [this.isAluno.cpf ,Validators.compose ( [Validators.minLength(14),Validators.maxLength(14),  Validators.required])],
              telefone: [this.isAluno.telefone,Validators.compose ( [Validators.minLength(13),Validators.maxLength(13),  Validators.required])],
              idTurma: [this.isAluno.idTurma,[Validators.required]]
            });
            this.titulo = "Editar Aluno"
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

  getTurmas(){
    
  }

  cadastrar(){
    let { nome, cpf, telefone,idTurma } = this.cadastroForm.controls;

    if (!this.cadastroForm.valid) {
      if (!nome.valid) {
        this.errorNome = true;
        this.messageNome = "Ops! Nome inválido";
      } else {
        this.messageNome = "";
      }

      if (!cpf.valid) {
        this.errorCpf = true;
        this.messageCpf = "Ops! Tamanho do CPF inválido";
      } else {
        this.messageCpf = "";
      }

      if (!telefone.valid) {
        this.errorTelefone = true;
        this.messageTelefone= "Ops! Telefone inváldo";
      } else {
        this.messageTelefone = "";
      }

      if (idTurma.valid) {
        this.errorTurma = true;
        this.messageTurma= "Ops! Turma inválida";
      } else {
        this.messageTurma= "";
      }

      
    }
    else {

      this.aluno.nome = nome.value;
      this.aluno.cpf = cpf.value;

      this.aluno.telefone = telefone.value;
      this.aluno.idTurma = idTurma.value;
      this.aluno.idResponsavel = this.pai.idResponsavel;
      this.Abrecarregamento("carreganddo");

      if(this.isAluno == undefined){
        this.alunosProvider.postAluno(this.aluno).subscribe(
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
        this.aluno.idResponsavel = this.isAluno.idResponsavel;
        this.aluno.idAluno = this.isAluno.idAluno;
        this.alunosProvider.putAluno(this.aluno).subscribe(
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
