import { FilhosPage } from './../filhos/filhos';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ExibicaoNoticiasPage } from '../exibicao-noticias/exibicao-noticias';

/**
 * Generated class for the TabResponsavelPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-responsavel',
  templateUrl: 'tab-responsavel.html'
})
export class TabResponsavelPage {


  notasRoot = FilhosPage;
  exibicaoNoticiasRoot = ExibicaoNoticiasPage;
  constructor(public navCtrl: NavController) {}

}
