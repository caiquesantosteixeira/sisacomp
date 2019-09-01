import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibicaoAgendasPage } from './exibicao-agendas';

@NgModule({
  declarations: [
    ExibicaoAgendasPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibicaoAgendasPage),
  ],
})
export class ExibicaoAgendasPageModule {}
