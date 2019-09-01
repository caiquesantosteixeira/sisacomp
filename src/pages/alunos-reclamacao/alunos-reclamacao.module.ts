import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunosReclamacaoPage } from './alunos-reclamacao';

@NgModule({
  declarations: [
    AlunosReclamacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunosReclamacaoPage),
  ],
})
export class AlunosReclamacaoPageModule {}
