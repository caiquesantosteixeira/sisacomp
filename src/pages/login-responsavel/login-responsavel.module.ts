import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginResponsavelPage } from './login-responsavel';
import { BrMaskerModule } from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    LoginResponsavelPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(LoginResponsavelPage),
  ],
})
export class LoginResponsavelPageModule {}
