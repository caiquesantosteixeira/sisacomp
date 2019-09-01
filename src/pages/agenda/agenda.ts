import { CadastrarAgendaPage } from './../cadastrar-agenda/cadastrar-agenda';
import { AgendaProvider } from './../../providers/agenda/agenda';
import { agenda } from './../../Models/Agenda';
import { CadastrarReclamacaoPage } from './../cadastrar-reclamacao/cadastrar-reclamacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { aluno } from '../../Models/aluno';
import { turma } from '../../Models/turma';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  public agendas = new Array<agenda>();
  public agenda = new agenda();
  public loader:Loading ;
  public turma = new turma();
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public agendaProvider:AgendaProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.turma = this.navParams.get("turma");
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.agendaProvider.getAgendaByTurma(this.turma.idTurma).subscribe(
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

  remover(agendas:agenda){
    
  }

  goCadastro(){
    this.navCtrl.push(CadastrarAgendaPage, {turma:this.turma})
  }

  goEditar(agenda:agenda){
    this.navCtrl.push(CadastrarAgendaPage, {turma:this.turma,agenda:agenda})
  
  }

  delete(agenda:agenda){

    this.Abrecarregamento("carreganddo");
  
      this.agendaProvider.DeleteAgenda(agenda).subscribe(
        data => {
          this.FechaCarregamento();
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          
          if(response.status == 200){
            this.exibirMensagem("Delete realizado com sucesso!")
            this.agendas = this.agendas.filter(a => a.idAgenda != agenda.idAgenda);
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
