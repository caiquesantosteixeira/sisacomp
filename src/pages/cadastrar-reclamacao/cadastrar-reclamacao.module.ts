import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarReclamacaoPage } from './cadastrar-reclamacao';

@NgModule({
  declarations: [
    CadastrarReclamacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarReclamacaoPage),
  ],
})
export class CadastrarReclamacaoPageModule {}
