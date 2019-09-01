import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilhosPage } from './filhos';

@NgModule({
  declarations: [
    FilhosPage,
  ],
  imports: [
    IonicPageModule.forChild(FilhosPage),
  ],
})
export class FilhosPageModule {}
