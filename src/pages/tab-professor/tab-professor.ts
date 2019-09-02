import { TurmaAlunosPage } from './../turma-alunos/turma-alunos';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabProfessorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-professor',
  templateUrl: 'tab-professor.html'
})
export class TabProfessorPage {

  notasRoot = TurmaAlunosPage


  constructor(public navCtrl: NavController) {}

}
