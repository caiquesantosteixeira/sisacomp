import { TurmaReclamacaoPage } from './../turma-reclamacao/turma-reclamacao';
import { AgendaPage } from './../agenda/agenda';
import { CadastrosPage } from './../cadastros/cadastros';
import { Component } from '@angular/core';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CadastrosPage;
  tab2Root = TurmaReclamacaoPage;
  tab3Root = AgendaPage;

  constructor() {

  }
}
