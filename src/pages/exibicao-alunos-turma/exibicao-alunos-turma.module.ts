import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibicaoAlunosTurmaPage } from './exibicao-alunos-turma';

@NgModule({
  declarations: [
    ExibicaoAlunosTurmaPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibicaoAlunosTurmaPage),
  ],
})
export class ExibicaoAlunosTurmaPageModule {}
