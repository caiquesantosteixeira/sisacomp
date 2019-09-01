import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarAgendaPage } from './cadastrar-agenda';

@NgModule({
  declarations: [
    CadastrarAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarAgendaPage),
  ],
})
export class CadastrarAgendaPageModule {}
