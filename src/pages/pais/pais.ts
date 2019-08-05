import { AlunosPage } from './../alunos/alunos';
import { CadastrarPaiPage } from './../cadastrar-pai/cadastrar-pai';
import { PaisProvider } from './../../providers/pais/pais';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { turma } from '../../Models/turma';
import { responsavel } from '../../Models/responsavel';



/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
})
export class PaisPage {
  public turma = new turma();
  public pais = new Array<responsavel>();
  NomePesquisa:string;
  CpfPesquisa:string;
  public loader:Loading ;
  constructor(public alertController:AlertController, public loadingCtrl:LoadingController,public PaisProvider:PaisProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.Abrecarregamento("carreagando");
    this.PaisProvider.getPaisTurma(0).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.pais = objeto_retorno;
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

  Pesquisar(){
    this.PaisProvider.getPaisPorNome(this.NomePesquisa).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.pais = objeto_retorno;
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

  PesquisarPorCpf(){
    this.PaisProvider.getPaisPorCpf(this.CpfPesquisa).subscribe(
      data => {
        this.FechaCarregamento();
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(response.status == 200){
          this.pais = objeto_retorno;
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

  ativar(pai:responsavel){
    if(pai.ativo == 0){
      pai.ativo = 1;
    }else{
      pai.ativo = 0;
    }

        this.Abrecarregamento("carreganddo");

          this.PaisProvider.putPai(pai).subscribe(
            data => {
              this.FechaCarregamento();
              const response = (data as any);
              //const objeto_retorno = JSON.parse(response._body);
              if(response.status == 200){
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
              if(pai.ativo == 1){
                pai.ativo = 0;
              }else{
                pai.ativo = 1;
              }

              this.FechaCarregamento();
              console.log(error)
          })
  }

  goCadastro(){
    this.navCtrl.push(CadastrarPaiPage)

  }

  goEditar(pai:responsavel){
    this.navCtrl.push(CadastrarPaiPage,{pai:pai})
  }

  goAlunos(pai:responsavel){
    this.navCtrl.push(AlunosPage,{pai:pai})
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
