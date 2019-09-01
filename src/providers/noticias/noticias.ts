import { agenda } from './../../Models/Agenda';
    
import { Injectable } from '@angular/core';


import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { host } from '../../Models/host';
import { noticia } from '../../Models/noticia';

/*
  Generated class for the NoticiasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiasProvider {
  public host = new host();
  constructor( public http:Http) {
    console.log('Hello TurmasProvider Provider');
  }

  getNoticias(){ //API
    return this.http.get(this.host.ip+this.host.caminhoClasses+"noticia").timeout(8000);;
  }


  postNoticia(noticia:noticia){

    var link = this.host.ip+this.host.caminhoClasses+"noticia"

    var data = JSON.stringify(noticia);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.post(link, data, { headers: headers }).timeout(8000);
  }

  putNoticia(noticia:noticia){

    var link = this.host.ip+this.host.caminhoClasses+"noticia"

    var data = JSON.stringify(noticia);

    var headers = new Headers();

    headers.append('Content-Type', 'application/json')

    return this.http.put(link, data, { headers: headers }).timeout(8000);
  }

  DeleteNoticias(noticia:noticia){
    return this.http.delete(this.host.ip+this.host.caminhoClasses+"noticia/"+noticia.idNoticia).timeout(8000);
  }

}
