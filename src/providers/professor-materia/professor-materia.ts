import { materiaTurma } from './../../Models/materiaTurma';
import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';
import { professorMateria } from '../../Models/professorMateria';

/*
  Generated class for the ProfessorMateriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfessorMateriaProvider {
  public host = new host();
  constructor(public http:Http) {
    console.log('Hello MateriaProvider Provider');
  }

  getProfessorMateria(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"professorMateria/").timeout(8000);;
  }

 


  postProfessorMateria(professorMateria:professorMateria){

    var link = this.host.ip+this.host.caminhoClasses+"professorMateria"

    var data = JSON.stringify(professorMateria);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putProfessorMateria(professorMateria:professorMateria){

    var link = this.host.ip+this.host.caminhoClasses+"professorMateria"

    var data = JSON.stringify(professorMateria);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }



}
