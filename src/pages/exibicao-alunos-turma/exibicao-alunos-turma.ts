import { CadastrarNotaPage } from './../cadastrar-nota/cadastrar-nota';
import { ProvasProvider } from './../../providers/provas/provas';
import { aluno } from './../../Models/aluno';
import { TurmasProvider } from './../../providers/turmas/turmas';
import { CadastarAlunoPage } from './../cadastar-aluno/cadastar-aluno';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading, Item } from 'ionic-angular';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { responsavel } from '../../Models/responsavel';
import { professor } from '../../Models/professor';
import { prova } from '../../Models/prova';

/**
 * Generated class for the ExibicaoAlunosTurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibicao-alunos-turma',
  templateUrl: 'exibicao-alunos-turma.html',
})
export class ExibicaoAlunosTurmaPage {
  public professor = new professor();
  public alunos = new Array<aluno>();
  public loader:Loading ;
  public provas = new Array<prova>()
  constructor(public provasProvider:ProvasProvider, public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController,public AlunoProvider:AlunoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.professor = this.navParams.get("professor");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExibicaoAlunosTurmaPage');
   
      this.provasProvider.getProvaPorMateria(this.professor.materia[0].idMateria).subscribe(
        async data => {
     
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          if(response.status == 200){
            this.provas = objeto_retorno;

          }else{
            if(response.status == 500){
              this.exibirMensagem('Erro interno no servidor');
            }else{
              this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
            }
          }
        
        }, error => {

          this.exibirMensagem('falha ao tentar se comunicar com o servidor');
          console.log(error)
        }
    )

    console.log('ionViewDidLoad ExibicaoAlunosTurmaPage');
      this.Abrecarregamento("carregando...")
      this.AlunoProvider.getAlunosByTurma(this.professor.turma.idTurma).subscribe(
        async data => {
          this.FechaCarregamento();
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          if(response.status == 200){
            this.alunos = objeto_retorno;

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

  goCadastrarNota(){
    this.navCtrl.push(CadastrarNotaPage)
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
