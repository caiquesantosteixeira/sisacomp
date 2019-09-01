import { aluno } from './../../Models/aluno';
import { TurmasProvider } from './../../providers/turmas/turmas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading, Item } from 'ionic-angular';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { responsavel } from '../../Models/responsavel';
import { turma } from '../../Models/turma';
import { ReclamacoesPage } from '../reclamacoes/reclamacoes';

/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos-reclamacao.html',
})
export class AlunosReclamacaoPage {
  public alunos = new Array<aluno>();
  public turma = new turma();
  public loader:Loading ;
  constructor(public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController,public AlunoProvider:AlunoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.turma = this.navParams.get("turma");
  }


  ionViewWillEnter() {

      this.Abrecarregamento("carreagando");
      this.AlunoProvider.getAlunosByTurma(this.turma.idTurma).subscribe(
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

  goReclamacao(aluno:aluno){
    this.navCtrl.push(ReclamacoesPage, {aluno:aluno})
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
