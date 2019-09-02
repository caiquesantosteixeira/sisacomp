import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarNotaPage } from './cadastrar-nota';

@NgModule({
  declarations: [
    CadastrarNotaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarNotaPage),
  ],
})
export class CadastrarNotaPageModule {}
