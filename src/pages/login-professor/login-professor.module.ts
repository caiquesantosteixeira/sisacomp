import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginProfessorPage } from './login-professor';
import { BrMaskerModule } from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    LoginProfessorPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(LoginProfessorPage),
  ],
})
export class LoginProfessorPageModule {}
