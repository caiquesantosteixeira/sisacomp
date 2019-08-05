import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmaPaisPage } from './turma-pais';

@NgModule({
  declarations: [
    TurmaPaisPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaPaisPage),
  ],
})
export class TurmaPaisPageModule {}
