import { TurmaAgendaPage } from './../turma-agenda/turma-agenda';
import { TurmaReclamacaoPage } from './../turma-reclamacao/turma-reclamacao';
import { CadastrosPage } from './../cadastros/cadastros';
import { Component } from '@angular/core';
import { NoticiasPage } from '../noticias/noticias';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CadastrosPage;
  tab2Root = TurmaReclamacaoPage;
  tab3Root = TurmaAgendaPage;
  tab4Root = NoticiasPage
  constructor() {

  }
}
