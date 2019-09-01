import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmaAgendaPage } from './turma-agenda';

@NgModule({
  declarations: [
    TurmaAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaAgendaPage),
  ],
})
export class TurmaAgendaPageModule {}
