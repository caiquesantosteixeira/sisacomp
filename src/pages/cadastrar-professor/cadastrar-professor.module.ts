import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarProfessorPage } from './cadastrar-professor';
import { BrMaskerModule } from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    CadastrarProfessorPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadastrarProfessorPage),
  ],
})
export class CadastrarProfessorPageModule {}
