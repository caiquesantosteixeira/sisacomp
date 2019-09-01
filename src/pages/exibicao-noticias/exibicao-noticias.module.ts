import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibicaoNoticiasPage } from './exibicao-noticias';

@NgModule({
  declarations: [
    ExibicaoNoticiasPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibicaoNoticiasPage),
  ],
})
export class ExibicaoNoticiasPageModule {}
