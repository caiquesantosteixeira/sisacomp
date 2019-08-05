import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastarAlunoPage } from './cadastar-aluno';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastarAlunoPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadastarAlunoPage),
  ],
})
export class CadastarAlunoPageModule {}
