import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/nav_pages/home-page/home-page.component';
import { RecursosPageComponent } from './components/nav_pages/recursos-page/recursos-page.component';
import { ContatoPageComponent } from './components/nav_pages/contato-page/contato-page.component';
import { PerfisPageComponent } from './components/nav_pages/perfis-page/perfis-page.component';
import { LonginPageComponent } from './components/nav_pages/longin-page/longin-page.component';
import { TriagemPageComponent } from './components/nav_pages/triagem-page/triagem-page.component';
import { CadastroPageComponent } from './components/nav_pages/cadastro-page/cadastro-page.component';
import { PerfilPsicologoPageComponent } from './components/web_pages/perfil-psicologo-page/perfil-psicologo-page.component';
import { CadastroPacientePageComponent } from './components/web_pages/cadastro-paciente-page/cadastro-paciente-page.component';
import { CadastroPsicologoPageComponent } from './components/web_pages/cadastro-psicologo-page/cadastro-psicologo-page.component';
import { LoginPacientePageComponent } from './components/web_pages/login-paciente-page/login-paciente-page.component';
import { LoginPsicologoPageComponent } from './components/web_pages/login-psicologo-page/login-psicologo-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'recursos', component: RecursosPageComponent},
  { path: 'perfis', component: PerfisPageComponent},
  { path: 'contato', component: ContatoPageComponent},
  { path: 'login', component: LonginPageComponent},
  { path: 'cadastrar', component: CadastroPageComponent},
  { path: 'triagem', component: TriagemPageComponent},
  // Adicionar mais caminhos.
  { path: 'perfil-completo/:id', component: PerfilPsicologoPageComponent},
  //{ path: 'cadastro-paciente/:id', component: CadastroPacientePageComponent},
  //{ path: 'cadastro-psicologo/:id', component: CadastroPsicologoPageComponent},
  //{ path: 'login-paciente/:id', component: LoginPacientePageComponent},
  //{ path: 'login-psicologo/:id', component: LoginPsicologoPageComponent}

  { path: 'cadastro-paciente', component: CadastroPacientePageComponent},
  { path: 'cadastro-psicologo', component: CadastroPsicologoPageComponent},
  { path: 'login-paciente', component: LoginPacientePageComponent},
  { path: 'login-psicologo', component: LoginPsicologoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
