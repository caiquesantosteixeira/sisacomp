import { LoginAdminPage } from './../login-admin/login-admin';
import { LoginProfessorPage } from './../login-professor/login-professor';
import { LoginResposavelPage } from './../login-resposavel/login-resposavel';
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
    this.navCtrl.push(LoginResposavelPage)
  }

  goProfessores(){
    this.navCtrl.push(LoginProfessorPage)
  }

  goAdmins(){
    this.navCtrl.push(LoginAdminPage)
  }

}
