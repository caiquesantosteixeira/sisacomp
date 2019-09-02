import { aluno } from './../../Models/aluno';
import { TurmasProvider } from './../../providers/turmas/turmas';
import { CadastarAlunoPage } from './../cadastar-aluno/cadastar-aluno';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading, Item } from 'ionic-angular';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { responsavel } from '../../Models/responsavel';


/**
 * Generated class for the AlunosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {
  public pai = new responsavel();
  public alunos = new Array<aluno>();
  public loader:Loading ;
  constructor(public turmasProvider:TurmasProvider, public alertController:AlertController, public loadingCtrl:LoadingController,public AlunoProvider:AlunoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.pai = this.navParams.get("pai");
  }


  ionViewWillEnter() {
      this.Abrecarregamento("carreagando");
      this.AlunoProvider.getAlunosByPai(this.pai.idResponsavel).subscribe(
        async data => {
          this.FechaCarregamento();
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          if(response.status == 200){
            this.alunos = objeto_retorno;

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

  ativar(aluno:aluno){
    if(aluno.ativo == 0){
      aluno.ativo = 1;
    }else{
      aluno.ativo = 0;
    }

        this.Abrecarregamento("carreganddo");

          this.AlunoProvider.putAluno(aluno).subscribe(
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
              if(aluno.ativo == 1){
                aluno.ativo = 0;
              }else{
                aluno.ativo = 1;
              }

              this.FechaCarregamento();
              console.log(error)
          })
  }

  goCadastro(){

      this.navCtrl.push(CadastarAlunoPage, {pai:this.pai})
    

    
  }

  goEditar(aluno:responsavel){

      this.navCtrl.push(CadastarAlunoPage,{aluno:aluno, pai:this.pai})
    
  
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
