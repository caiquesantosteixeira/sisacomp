import { LoginResponsavelPage } from './../login-responsavel/login-responsavel';
import { LoginAdminPage } from './../login-admin/login-admin';
import { LoginProfessorPage } from './../login-professor/login-professor';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goPais(){
    this.navCtrl.push(LoginResponsavelPage)
  }

  goProfessores(){
    this.navCtrl.push(LoginProfessorPage)
  }

  goAdmins(){
    this.navCtrl.push(LoginAdminPage)
  }

}
