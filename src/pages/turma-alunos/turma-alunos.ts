import { MyApp } from './../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { professor } from '../../Models/professor';
import { ExibicaoAlunosTurmaPage } from '../exibicao-alunos-turma/exibicao-alunos-turma';

/**
 * Generated class for the TurmaAlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turma-alunos',
  templateUrl: 'turma-alunos.html',
})
export class TurmaAlunosPage {

  public professores = new Array<professor>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.professores = MyApp.professor;
    console.log('ionViewDidLoad TurmaAlunosPage');
  }
  
  goAlunos(professor:professor){
    this.navCtrl.push(ExibicaoAlunosTurmaPage,{professor:professor})
  }

}
