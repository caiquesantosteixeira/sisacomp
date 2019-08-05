import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';
import { responsavel } from '../../Models/responsavel';

/*
  Generated class for the TurmasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {
  public host = new host();
  constructor( public http:Http) {
    console.log('Hello ReponsavelProvider Provider');
  }

  getPaisTurma(idTurma:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Responsavel/"+idTurma).timeout(8000);;
  }

  getPaisPorNome(nome:string){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Responsavel/nome?nome="+nome).timeout(8000);;
  }

  getPaisPorCpf(cpf:string){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Responsavel/cpf?cpf="+cpf).timeout(8000);;
  }

  postPai(turma:responsavel){

    var link = this.host.ip+this.host.caminhoClasses+"Responsavel"

    var data = JSON.stringify(turma);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putPai(turma:responsavel){

    var link = this.host.ip+this.host.caminhoClasses+"Responsavel"

    var data = JSON.stringify(turma);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }
}