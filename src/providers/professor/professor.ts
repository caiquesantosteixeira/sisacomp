import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';
import { professor } from '../../Models/professor';

/*
  Generated class for the ProfessorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfessorProvider {
  public host = new host();
  constructor( public http:Http) {
    console.log('Hello ReponsavelProvider Provider');
  }

  getProfessor(idMateria:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"professor/GetProfessor?idMateria="+idMateria).timeout(8000);;
  }


  postPai(professor:professor){

    var link = this.host.ip+this.host.caminhoClasses+"professor"

    var data = JSON.stringify(professor);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putPai(professor:professor){

    var link = this.host.ip+this.host.caminhoClasses+"professor"

    var data = JSON.stringify(professor);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

}
