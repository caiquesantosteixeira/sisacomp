import { CadastrarAgendaPage } from './../cadastrar-agenda/cadastrar-agenda';
import { AgendaProvider } from './../../providers/agenda/agenda';
import { agenda } from './../../Models/Agenda';
import { CadastrarReclamacaoPage } from './../cadastrar-reclamacao/cadastrar-reclamacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { aluno } from '../../Models/aluno';
import { turma } from '../../Models/turma';

/**
 * Generated class for the ExibicaoAgendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibicao-agendas',
  templateUrl: 'exibicao-agendas.html',
})
export class ExibicaoAgendasPage {

  public agendas = new Array<agenda>();
  public agenda = new agenda();
  public loader:Loading ;
  public aluno= new aluno();
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public agendaProvider:AgendaProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.aluno = this.navParams.get("aluno")
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.agendaProvider.getAgendaByTurma(this.aluno.idTurma).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.agendas = objeto_retorno;
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
