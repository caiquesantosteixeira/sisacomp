import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmaNoticiaPage } from './turma-noticia';

@NgModule({
  declarations: [
    TurmaNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaNoticiaPage),
  ],
})
export class TurmaNoticiaPageModule {}
