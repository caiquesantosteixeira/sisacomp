import { CadastrarReclamacaoPage } from './../cadastrar-reclamacao/cadastrar-reclamacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { reclamacao } from '../../Models/reclamacao';
import { ReclamacaoProvider } from '../../providers/reclamacao/reclamacao';
import { aluno } from '../../Models/aluno';

/**
 * Generated class for the ExibicaoReclamacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibicao-reclamacoes',
  templateUrl: 'exibicao-reclamacoes.html',
})
export class ExibicaoReclamacoesPage {
  public reclamacoes = new Array<reclamacao>();
  public reclamacao = new reclamacao();
  public loader:Loading ;
  public aluno = new aluno();
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public reclamacaoProvider:ReclamacaoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.aluno = this.navParams.get("aluno");
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.reclamacaoProvider.getReclamacaoByIdAluno(this.aluno.idAluno).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.reclamacoes = objeto_retorno;
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

  goCadastro(){
    this.navCtrl.push(CadastrarReclamacaoPage, {aluno:this.aluno})

  }

  goEditar(reclamacao:reclamacao){
    this.navCtrl.push(CadastrarReclamacaoPage,{reclamacao:reclamacao,aluno:this.aluno})
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
