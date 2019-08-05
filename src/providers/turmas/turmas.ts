import { turma } from './../../Models/turma';
    
import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';

/*
  Generated class for the TurmasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TurmasProvider {
  public host = new host();
  constructor( public http:Http) {
    console.log('Hello TurmasProvider Provider');
  }

  getTurmas(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"turmas").timeout(8000);;
  }

  getTurmasById(id:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"turmas/"+id).timeout(8000);;
  }

  postTurma(turma:turma){

    var link = this.host.ip+this.host.caminhoClasses+"turmas"

    var data = JSON.stringify(turma);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putTurma(turma:turma){

    var link = this.host.ip+this.host.caminhoClasses+"turmas"

    var data = JSON.stringify(turma);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

}
