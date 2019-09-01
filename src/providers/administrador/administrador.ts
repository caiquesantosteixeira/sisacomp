import { agenda } from './../../Models/Agenda';
    
import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';

/*
  Generated class for the AdministradorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdministradorProvider {
  public host = new host();
  constructor( public http:Http) {
    console.log('Hello TurmasProvider Provider');
  }

  Login(login:string, senha:string){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"administrador/login?login="+login+"&senha="+senha).timeout(8000);;
  }

}
