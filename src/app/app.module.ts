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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TurmasProvider } from '../providers/turmas/turmas';
import { AlunoProvider } from '../providers/aluno/aluno';
import { HttpModule } from '@angular/http';
import { PaisProvider } from '../providers/pais/pais';
import { MateriaProvider } from '../providers/materia/materia';
import { ProfessorProvider } from '../providers/professor/professor';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TurmasProvider,
    AlunoProvider,
    PaisProvider,
    MateriaProvider,
    ProfessorProvider
  ]
})
export class AppModule {}
