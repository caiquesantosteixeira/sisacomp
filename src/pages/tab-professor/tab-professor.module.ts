import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabProfessorPage } from './tab-professor';

@NgModule({
  declarations: [
    TabProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(TabProfessorPage),
  ]
})
export class TabProfessorPageModule {}
