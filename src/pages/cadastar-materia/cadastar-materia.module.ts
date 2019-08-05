import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastarMateriaPage } from './cadastar-materia';

@NgModule({
  declarations: [
    CadastarMateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastarMateriaPage),
  ],
})
export class CadastarMateriaPageModule {}
