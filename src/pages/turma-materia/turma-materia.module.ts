import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmaMateriaPage } from './turma-materia';

@NgModule({
  declarations: [
    TurmaMateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(TurmaMateriaPage),
  ],
})
export class TurmaMateriaPageModule {}
