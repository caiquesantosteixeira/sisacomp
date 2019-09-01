import { ExibicaoNoticiasPageModule } from './../pages/exibicao-noticias/exibicao-noticias.module';
import { FilhosPageModule } from './../pages/filhos/filhos.module';
import { LoginResponsavelPageModule } from './../pages/login-responsavel/login-responsavel.module';

import { LoginProfessorPageModule } from './../pages/login-professor/login-professor.module';
import { CadastrarNoticiaPageModule } from './../pages/cadastrar-noticia/cadastrar-noticia.module';
import { CadastrarAgendaPageModule } from './../pages/cadastrar-agenda/cadastrar-agenda.module';
import { TurmaAgendaPageModule } from './../pages/turma-agenda/turma-agenda.module';
import { CadastrarReclamacaoPageModule } from './../pages/cadastrar-reclamacao/cadastrar-reclamacao.module';
import { AlunosReclamacaoPageModule } from './../pages/alunos-reclamacao/alunos-reclamacao.module';
import { ReclamacoesPageModule } from './../pages/reclamacoes/reclamacoes.module';
import { TurmaReclamacaoPageModule } from './../pages/turma-reclamacao/turma-reclamacao.module';
import { TurmaNoticiaPageModule } from './../pages/turma-noticia/turma-noticia.module';
import { VincularProfessorPageModule } from './../pages/vincular-professor/vincular-professor.module';
import { CadastrarProfessorPageModule } from './../pages/cadastrar-professor/cadastrar-professor.module';
import { ProfessoresPageModule } from './../pages/professores/professores.module';
import { CadastarMateriaPageModule } from './../pages/cadastar-materia/cadastar-materia.module';
import { MateriasPageModule } from './../pages/materias/materias.module';
import { TurmaMateriaPageModule } from './../pages/turma-materia/turma-materia.module';
import { CadastarAlunoPageModule } from './../pages/cadastar-aluno/cadastar-aluno.module';
import { AlunosPageModule } from './../pages/alunos/alunos.module';
import { CadastrarPaiPageModule } from './../pages/cadastrar-pai/cadastrar-pai.module';
import { PaisPageModule } from './../pages/pais/pais.module';
import { TurmaPaisPageModule } from './../pages/turma-pais/turma-pais.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarTurmasPageModule } from './../pages/cadastrar-turmas/cadastrar-turmas.module';
import { TurmasPageModule } from './../pages/turmas/turmas.module';
import { AgendaPageModule } from './../pages/agenda/agenda.module';
import { NoticiasPageModule } from './../pages/noticias/noticias.module';
import { CadastrosPageModule } from './../pages/cadastros/cadastros.module';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabResponsavelPage } from './../pages/tab-responsavel/tab-responsavel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TurmasProvider } from '../providers/turmas/turmas';
import { AlunoProvider } from '../providers/aluno/aluno';
import { HttpModule } from '@angular/http';
import { PaisProvider } from '../providers/pais/pais';
import { MateriaProvider } from '../providers/materia/materia';
import { ProfessorProvider } from '../providers/professor/professor';
import { MateriaTurmaProvider } from '../providers/materia-turma/materia-turma';
import { ProfessorMateriaProvider } from '../providers/professor-materia/professor-materia';
import { ReclamacaoProvider } from '../providers/reclamacao/reclamacao';
import { AgendaProvider } from '../providers/agenda/agenda';
import { NoticiasProvider } from '../providers/noticias/noticias';
import { LoginAdminPageModule } from '../pages/login-admin/login-admin.module';
import { AdministradorProvider } from '../providers/administrador/administrador';
import { ExibicaoReclamacoesPageModule } from '../pages/exibicao-reclamacoes/exibicao-reclamacoes.module';
import { ExibicaoAgendasPageModule } from '../pages/exibicao-agendas/exibicao-agendas.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TabResponsavelPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CadastrosPageModule,
    NoticiasPageModule,
    AgendaPageModule,
    TurmasPageModule,
    CadastrarTurmasPageModule,
    TurmaPaisPageModule,
    PaisPageModule,
    CadastrarPaiPageModule,
    AlunosPageModule,
    CadastarAlunoPageModule,
    TurmaMateriaPageModule,
    MateriasPageModule,
    CadastarMateriaPageModule,
    ProfessoresPageModule,
    CadastrarProfessorPageModule,
    VincularProfessorPageModule,
    TurmaNoticiaPageModule,
    TurmaReclamacaoPageModule,
    ReclamacoesPageModule,
    AlunosReclamacaoPageModule,
    CadastrarReclamacaoPageModule,
    TurmaAgendaPageModule,
    CadastrarAgendaPageModule,
    CadastrarNoticiaPageModule,
    LoginProfessorPageModule,
    LoginAdminPageModule,
    LoginResponsavelPageModule,
    FilhosPageModule,
    ExibicaoNoticiasPageModule,
    ExibicaoReclamacoesPageModule,
    ExibicaoAgendasPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TabResponsavelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TurmasProvider,
    AlunoProvider,
    PaisProvider,
    MateriaProvider,
    ProfessorProvider,
    MateriaTurmaProvider,
    ProfessorMateriaProvider,
    ReclamacaoProvider,
    AgendaProvider,
    NoticiasProvider,
    AdministradorProvider
  ]
})
export class AppModule {}
