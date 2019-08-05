import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarTurmasPage } from './cadastrar-turmas';

@NgModule({
  declarations: [
    CadastrarTurmasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarTurmasPage),
  ],
})
export class CadastrarTurmasPageModule {}
