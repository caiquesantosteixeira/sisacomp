import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAdminPage } from './login-admin';
import { BrMaskerModule } from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    LoginAdminPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(LoginAdminPage),
  ],
})
export class LoginAdminPageModule {}
