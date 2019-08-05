import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisPage } from './pais';
import { BrMaskerModule } from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    PaisPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(PaisPage),
  ],
})
export class PaisPageModule {}
