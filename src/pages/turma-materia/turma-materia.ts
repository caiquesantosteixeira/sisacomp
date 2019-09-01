import { MateriasPage } from './../materias/materias';
import { AlunosPage } from './../alunos/alunos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { turma } from '../../Models/turma';
import { TurmasProvider } from '../../providers/turmas/turmas';

/**
 * Generated class for the TurmaMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turma-materia',
  templateUrl: 'turma-materia.html',
})
export class TurmaMateriaPage {
  public turmas = new Array<turma>();
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public turmasProvider:TurmasProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.Abrecarregamento("carreagando");
    this.turmasProvider.getTurmas().subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.turmas = objeto_retorno;
          this.turmas = this.turmas.filter(a => a.ativo == 1);
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

  goMaterias(turma:turma){
    this.navCtrl.push(MateriasPage,{turma:turma})
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
