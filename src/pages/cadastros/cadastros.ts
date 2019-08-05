import { TurmaMateriaPage } from './../turma-materia/turma-materia';
import { PaisPage } from './../pais/pais';
import { TurmasPage } from './../turmas/turmas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastros',
  templateUrl: 'cadastros.html',
})
export class CadastrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrosPage');
  }

  goTurmas(){
    this.navCtrl.push(TurmasPage);

  }

  goTurmasPais(){
    this.navCtrl.push(PaisPage)
  }

  goMaterias(){
    this.navCtrl.push(TurmaMateriaPage);
  }

}
