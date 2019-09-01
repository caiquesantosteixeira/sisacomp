import { reclamacao } from './../../Models/reclamacao';
    
import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';

/*
  Generated class for the ReclamacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReclamacaoProvider {
  public host = new host();
  constructor( public http:Http) {
    console.log('Hello TurmasProvider Provider');
  }

  getReclamacao(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"reclamacao").timeout(8000);;
  }

  getReclamacaoByIdAluno(id:number){ //API
 
      return this.http.get(this.host.ip+this.host.caminhoClasses+"reclamacao/getbyaluno?idAluno="+id).timeout(8000);;
    
  }

  postReclamacao(reclamacao:reclamacao){

    var link = this.host.ip+this.host.caminhoClasses+"reclamacao"

    var data = JSON.stringify(reclamacao);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putReclamacao(reclamacao:reclamacao){

    var link = this.host.ip+this.host.caminhoClasses+"reclamacao"

    var data = JSON.stringify(reclamacao);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

  DeleteReclamacao(reclamacao:reclamacao){

    return this.http.delete(this.host.ip+this.host.caminhoClasses+"reclamacao/"+reclamacao.idReclamacao).timeout(8000);;
  }

}
