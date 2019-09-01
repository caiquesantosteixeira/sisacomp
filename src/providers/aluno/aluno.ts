import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';
import { aluno } from '../../Models/aluno';


/*
  Generated class for the AlunoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoProvider {


  public host = new host();
  constructor( public http:Http) {
    console.log('Hello ReponsavelProvider Provider');
  }

  getAlunosByTurma(idTurma:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Alunos/turma?idTurma="+idTurma).timeout(8000);;
  }

  getAlunosByPai(IdPai:number){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"Alunos/pai?idPai="+IdPai).timeout(8000);;
  }


  postAluno(aluno:aluno){

    var link = this.host.ip+this.host.caminhoClasses+"Alunos"

    var data = JSON.stringify(aluno);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putAluno(aluno:aluno){

    var link = this.host.ip+this.host.caminhoClasses+"Alunos"

    var data = JSON.stringify(aluno);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

}
