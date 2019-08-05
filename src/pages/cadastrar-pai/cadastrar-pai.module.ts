import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarPaiPage } from './cadastrar-pai';
import { BrMaskerModule } from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    CadastrarPaiPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadastrarPaiPage),
  ],
})
export class CadastrarPaiPageModule {}
