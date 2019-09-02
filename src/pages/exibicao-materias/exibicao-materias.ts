import { VincularProfessorPage } from './../vincular-professor/vincular-professor';
import { CadastarMateriaPage } from './../cadastar-materia/cadastar-materia';
import { MateriaProvider } from './../../providers/materia/materia';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { TurmasProvider } from '../../providers/turmas/turmas';
import { materia } from '../../Models/materia';

import { aluno } from '../../Models/aluno';

/**
 * Generated class for the ExibicaoMateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibicao-materias',
  templateUrl: 'exibicao-materias.html',
})
export class ExibicaoMateriasPage {

  public materias = new Array<materia>();
  public aluno = new aluno();
  public loader:Loading ;

  constructor(public materiaProvider:MateriaProvider, public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.aluno = this.navParams.get("aluno");
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.materiaProvider.getMateria().subscribe(
      async data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.materias = objeto_retorno;
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
