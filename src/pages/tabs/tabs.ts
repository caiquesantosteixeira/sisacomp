import { AgendaPage } from './../agenda/agenda';
import { NoticiasPage } from './../noticias/noticias';
import { CadastrosPage } from './../cadastros/cadastros';
import { Component } from '@angular/core';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CadastrosPage;
  tab2Root = NoticiasPage;
  tab3Root = AgendaPage;

  constructor() {

  }
}
