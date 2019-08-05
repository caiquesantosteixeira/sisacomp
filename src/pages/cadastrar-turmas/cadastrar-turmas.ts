import { TurmasPage } from './../turmas/turmas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { TurmasProvider } from '../../providers/turmas/turmas';
import { turma } from '../../Models/turma';
/**
 * Generated class for the CadastrarTurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-turmas',
  templateUrl: 'cadastrar-turmas.html',
})
export class CadastrarTurmasPage {
  public cadastroForm : any;
  
  public  messageSerie :string
  public  messageLetra:string
  public  messageTurno :string
  public  messageTipoSerie :string

  public  errorSerie :boolean = false;
  public  errorLetra:boolean= false;
  public  errorTurno :boolean= false;
  public  errorTipoSerie :boolean= false;
  public defaultSelectQuestion = 1;

  public turma = new turma();


  turnos: string[] = ['Manhã', 'Tarde', 'Noite'];
  tipos: string[] =  ['pré-escolar','fundamental','médio']

  titulo:string;
  isturma:any;

  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public turmasProvider:TurmasProvider,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.isturma = this.navParams.get("turma");
    if(this.isturma == undefined){
      this.cadastroForm = formBuilder.group({
        serie: ['', Validators.compose( [Validators.maxLength(1), Validators.pattern('[1-9]*'), Validators.required])],
        letra: ['',Validators.compose ( [Validators.maxLength(1), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        turno: ['1',[Validators.required]],
        tipoSerie: ['1',[Validators.required]],
      });

      this.titulo = "Cadastrar turma"
    }else{
      this.cadastroForm = formBuilder.group({
        serie: [this.isturma.serie, Validators.compose( [Validators.maxLength(1), Validators.pattern('[1-9]*'), Validators.required])],
        letra: [this.isturma.letra,Validators.compose ( [Validators.maxLength(1), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        turno: [this.isturma.turno,[Validators.required]],
        tipoSerie: [this.isturma.tipoSerie,[Validators.required]],
      });
      this.titulo = "Editar turma"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarTurmasPage');
  }

  cadastrar(){
      let { serie, letra, turno, tipoSerie } = this.cadastroForm.controls;
  
      if (!this.cadastroForm.valid) {
        if (!serie.valid) {
          this.errorSerie = true;
          this.messageSerie = "Ops! É necessário um único número nesse campo";
        } else {
          this.messageSerie = "";
        }

        if (!letra.valid) {
          this.errorLetra = true;
          this.messageLetra = "Ops! É necessário uma única letra nesse campo";
        } else {
          this.messageLetra = "";
        }

        if (!turno.valid) {
          this.errorTurno = true;
          this.messageTurno = "Ops! É necessário escolher um turno";
        } else {
          this.messageTurno = "";
        }

        if (!tipoSerie.valid) {
          this.errorTipoSerie = true;
          this.messageTipoSerie= "Ops! É necessário escolher um tipo de série";
        } else {
          this.messageTipoSerie = "";
        }
  
        
      }
      else {

        this.turma.serie = serie.value;
        this.turma.letra = letra.value;
        this.turma.turno = +turno.value;
        this.turma.tipoSerie = +tipoSerie.value;
        this.turma.ativo = 1;
        this.Abrecarregamento("carreganddo");

        if(this.isturma == undefined){
          this.turmasProvider.postTurma(this.turma).subscribe(
            data => {
              this.FechaCarregamento();
              const response = (data as any);
              //const objeto_retorno = JSON.parse(response._body);
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
              this.exibirMensagem('falha ao tentar se comunicar com o servidor');
              console.log(error)
            })

        }else{
          this.turma.idTurma = this.isturma.idTurma;
          this.turmasProvider.putTurma(this.turma).subscribe(
            data => {
              this.FechaCarregamento();
              const response = (data as any);
              //const objeto_retorno = JSON.parse(response._body);
              if(response.status == 204){
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
              this.exibirMensagem('falha ao tentar se comunicar com o servidor');
              console.log(error)
            })
        }
      }
  }


  editar(){
    let { serie, letra, turno, tipoSerie } = this.cadastroForm.controls;
 
    if (!this.cadastroForm.valid) {
      if (!serie.valid) {
        this.errorSerie = true;
        this.messageSerie = "Ops! É necessário um único número nesse campo";
      } else {
        this.messageSerie = "";
      }

      if (!letra.valid) {
        this.errorLetra = true;
        this.messageLetra = "Ops! É necessário uma única letra nesse campo";
      } else {
        this.messageLetra = "";
      }

      if (!turno.valid) {
        this.errorTurno = true;
        this.messageTurno = "Ops! É necessário escolher um turno";
      } else {
        this.messageTurno = "";
      }

      if (!tipoSerie.valid) {
        this.errorTipoSerie = true;
        this.messageTipoSerie= "Ops! É necessário escolher um tipo de série";
      } else {
        this.messageTipoSerie = "";
      }
 
      
    }
    else {

      this.turma.serie = serie.value;
      this.turma.letra = letra.value;
      this.turma.turno = +turno.value;
      this.turma.tipoSerie = +tipoSerie.value;
      this.Abrecarregamento("carreganddo");
      this.turmasProvider.putTurma(this.turma).subscribe(
        data => {
          this.FechaCarregamento();
          const response = (data as any);
          //const objeto_retorno = JSON.parse(response._body);
          if(response.status == 201){
            this.exibirMensagem("Cadastro realizado com sucesso!")
            this.navCtrl.setRoot(TurmasPage);
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
        })

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
