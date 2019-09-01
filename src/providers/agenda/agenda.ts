import { agenda } from './../../Models/Agenda';
    
import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';

/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendaProvider {
  public host = new host();
  constructor( public http:Http) {
    console.log('Hello TurmasProvider Provider');
  }

  getAgenda(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"agenda").timeout(8000);;
  }

  getAgendaByTurma(id:number){ //API
 
      return this.http.get(this.host.ip+this.host.caminhoClasses+"agenda/getbyturma?idAgenda="+id).timeout(8000);;
    
  }

  postAgenda(agenda:agenda){

    var link = this.host.ip+this.host.caminhoClasses+"agenda"

    var data = JSON.stringify(agenda);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putAgenda(agenda:agenda){

    var link = this.host.ip+this.host.caminhoClasses+"agenda"

    var data = JSON.stringify(agenda);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

  DeleteAgenda(agenda:agenda){
    return this.http.delete(this.host.ip+this.host.caminhoClasses+"agenda/"+agenda.idAgenda).timeout(8000);;
  }

}
