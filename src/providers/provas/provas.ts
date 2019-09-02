import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';
import { materia } from '../../Models/materia';


/*
  Generated class for the ProvasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvasProvider {

  public host = new host();
  constructor(public http:Http) {
    console.log('Hello MateriaProvider Provider');
  }
  getProva(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"prova/").timeout(8000);;
  }

  getProvaPorId(idTurma:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"prova/"+idTurma).timeout(8000);;
  }

  getProvaPorMateria(idMateria:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"prova/provaByMateria?id="+idMateria).timeout(8000);;
  }



}
