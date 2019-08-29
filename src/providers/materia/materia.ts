import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';
import { materia } from '../../Models/materia';

/*
  Generated class for the MateriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriaProvider {
  public host = new host();
  constructor(public http:Http) {
    console.log('Hello MateriaProvider Provider');
  }

  getMateria(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Materias/").timeout(8000);;
  }

  getMateriaPorId(idTurma:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Materias/"+idTurma).timeout(8000);;
  }

  getMateriaPorTurma(idTurma:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Materias/turma?id="+idTurma).timeout(8000);;
  }


  postMateria(materia:materia){

    var link = this.host.ip+this.host.caminhoClasses+"Materias"

    var data = JSON.stringify(materia);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putMateria(materia:materia){

    var link = this.host.ip+this.host.caminhoClasses+"Materias"

    var data = JSON.stringify(materia);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

}
