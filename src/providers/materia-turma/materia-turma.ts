import { materiaTurma } from './../../Models/materiaTurma';
import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';

/*
  Generated class for the MateriaTurmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriaTurmaProvider {
  public host = new host();
  constructor(public http:Http) {
    console.log('Hello MateriaProvider Provider');
  }
  getMateriaTurma(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"MateriaTurma/").timeout(8000);;
  }

  getMateriaTurmaPorId(idTurma:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"MateriaTurma/"+idTurma).timeout(8000);;
  }

  getMateriaTurmaPorTurma(idTurma:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"MateriaTurma/turma?id="+idTurma).timeout(8000);;
  }


  postMateriaTurma(materia:materiaTurma){

    var link = this.host.ip+this.host.caminhoClasses+"MateriaTurma"

    var data = JSON.stringify(materia);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putMateriaTurma(materia:materiaTurma){

    var link = this.host.ip+this.host.caminhoClasses+"MateriaTurma"

    var data = JSON.stringify(materia);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

}
