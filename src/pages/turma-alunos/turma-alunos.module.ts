import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmaAlunosPage } from './turma-alunos';

@NgModule({
  declarations: [
    TurmaAlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaAlunosPage),
  ],
})
export class TurmaAlunosPageModule {}
