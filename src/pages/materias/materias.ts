import { VincularProfessorPage } from './../vincular-professor/vincular-professor';
import { CadastarMateriaPage } from './../cadastar-materia/cadastar-materia';
import { MateriaProvider } from './../../providers/materia/materia';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { TurmasProvider } from '../../providers/turmas/turmas';
import { materia } from '../../Models/materia';
import { turma } from '../../Models/turma';


/**
 * Generated class for the MateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materias',
  templateUrl: 'materias.html',
})
export class MateriasPage {
  public materias = new Array<materia>();
  public turma = new turma();
  public loader:Loading ;

  constructor(public materiaProvider:MateriaProvider, public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.turma = this.navParams.get("turma");
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.materiaProvider.getMateriaPorTurma(this.turma.idTurma).subscribe(
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

  ativar(materia:materia){
    if(materia.ativo == 0){
      materia.ativo = 1;
    }else{
      materia.ativo = 0;
    }

        this.Abrecarregamento("carreganddo");

          this.materiaProvider.putMateria(materia).subscribe(
            data => {
              this.FechaCarregamento();
              const response = (data as any);
              //const objeto_retorno = JSON.parse(response._body);
              if(response.status == 204){
                this.exibirMensagem("Operação realizado com sucesso!")
                //this.navCtrl.setRoot(TurmasPage);
              }else{
                if(response.status == 500){
                  this.exibirMensagem('Erro interno no servidor');
                }else{
                  this.exibirMensagem('Falha ao tentar se comunicar com o servidor verifique sua conexão com a internet');
                }
              }
      
            }, error => {
              this.exibirMensagem('falha ao tentar se comunicar com o servidor');
              if(materia.ativo == 1){
                materia.ativo = 0;
              }else{
                materia.ativo = 1;
              }

              this.FechaCarregamento();
              console.log(error)
          })
  }

  goCadastro(){
    this.navCtrl.push(CadastarMateriaPage, {turma:this.turma})
  }

  goEditar(materia:materia){
    this.navCtrl.push(CadastarMateriaPage,{materia:materia, turma:this.turma})
  }

  goProfessores(materia:materia){
    this.navCtrl.push(VincularProfessorPage, {materia:materia});
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
