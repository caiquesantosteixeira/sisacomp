import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginResposavelPage } from './login-resposavel';

@NgModule({
  declarations: [
    LoginResposavelPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginResposavelPage),
  ],
})
export class LoginResposavelPageModule {}
