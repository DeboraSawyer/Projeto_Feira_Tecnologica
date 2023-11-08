import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importados para ligar com o BackEnd.
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Corpo do site (no geral, exceto painel psicólogo/paciente).
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// Links do Menu.
import { HomePageComponent } from './components/nav_pages/home-page/home-page.component';
import { RecursosPageComponent } from './components/nav_pages/recursos-page/recursos-page.component';
import { PerfisPageComponent } from './components/nav_pages/perfis-page/perfis-page.component';
import { ContatoPageComponent } from './components/nav_pages/contato-page/contato-page.component';
import { LonginPageComponent } from './components/nav_pages/longin-page/longin-page.component';
import { CadastroPageComponent } from './components/nav_pages/cadastro-page/cadastro-page.component';
import { TriagemPageComponent } from './components/nav_pages/triagem-page/triagem-page.component';

// Páginas do site (sem ser clicáveis no menu).
import { PerfilPsicologoPageComponent } from './components/web_pages/perfil-psicologo-page/perfil-psicologo-page.component';
import { CadastroPacientePageComponent } from './components/web_pages/cadastro-paciente-page/cadastro-paciente-page.component';
import { CadastroPsicologoPageComponent } from './components/web_pages/cadastro-psicologo-page/cadastro-psicologo-page.component';
import { LoginPacientePageComponent } from './components/web_pages/login-paciente-page/login-paciente-page.component';
import { LoginPsicologoPageComponent } from './components/web_pages/login-psicologo-page/login-psicologo-page.component';

// Páginas de usuários (psicólogos/pacientes).
import { DashboardPacienteComponent } from './components/dashboard-paciente/dashboard-paciente.component';
import { DashboardPsicologoComponent } from './components/dashboard-psicologo/dashboard-psicologo.component';

// Corpo do site (dentro do dashboard paciente).
import { NavPacienteComponent } from './components/nav-paciente/nav-paciente.component';

// Corpo do site (dentro do dashboard psicólogo).
import { NavPsicologoComponent } from './components/nav-psicologo/nav-psicologo.component';

// Links do Menu paciente.
import { HomePagePacienteComponent } from './components/nav_pages_paciente/home-page-paciente/home-page-paciente.component';
import { ConfiguracaoPagePacienteComponent } from './components/nav_pages_paciente/configuracao-page-paciente/configuracao-page-paciente.component';

// Links do Menu psicólogo.
import { HomePagePsicologoComponent } from './components/nav_pages_psicologo/home-page-psicologo/home-page-psicologo.component';
import { ConfiguracaoPagePsicologoComponent } from './components/nav_pages_psicologo/configuracao-page-psicologo/configuracao-page-psicologo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomePageComponent,
    RecursosPageComponent,
    PerfisPageComponent,
    ContatoPageComponent,
    LonginPageComponent,
    CadastroPageComponent,
    TriagemPageComponent,
    PerfilPsicologoPageComponent,
    CadastroPacientePageComponent,
    CadastroPsicologoPageComponent,
    LoginPacientePageComponent,
    LoginPsicologoPageComponent,
    DashboardPacienteComponent,
    DashboardPsicologoComponent,
    NavPacienteComponent,
    NavPsicologoComponent,
    HomePagePacienteComponent,
    ConfiguracaoPagePacienteComponent,
    HomePagePsicologoComponent,
    ConfiguracaoPagePsicologoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }