import { ExibicaoAgendasPage } from './../exibicao-agendas/exibicao-agendas';
import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { aluno } from '../../Models/aluno';
import { ExibicaoReclamacoesPage } from '../exibicao-reclamacoes/exibicao-reclamacoes';
import { ExibicaoMateriasPage } from '../exibicao-materias/exibicao-materias';

/**
 * Generated class for the FilhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filhos',
  templateUrl: 'filhos.html',
})
export class FilhosPage {
  public filhos = new Array<aluno>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.filhos = MyApp.filhos;
  }

  goReclamacoes(aluno:aluno){
    this.navCtrl.push(ExibicaoReclamacoesPage, {aluno:aluno})
  }

  goAgendas(aluno:aluno){
    this.navCtrl.push(ExibicaoAgendasPage, {aluno:aluno})
  }

  goNotas(aluno:aluno){
    this.navCtrl.push(ExibicaoMateriasPage, {aluno:aluno})
  }

}
