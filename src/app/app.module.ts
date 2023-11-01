import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/nav_pages/home-page/home-page.component';
import { RecursosPageComponent } from './components/nav_pages/recursos-page/recursos-page.component';
import { PerfisPageComponent } from './components/nav_pages/perfis-page/perfis-page.component';
import { ContatoPageComponent } from './components/nav_pages/contato-page/contato-page.component';
import { LonginPageComponent } from './components/nav_pages/longin-page/longin-page.component';
import { CadastroPageComponent } from './components/nav_pages/cadastro-page/cadastro-page.component';
import { TriagemPageComponent } from './components/nav_pages/triagem-page/triagem-page.component';
import { PerfilPsicologoPageComponent } from './components/web_pages/perfil-psicologo-page/perfil-psicologo-page.component';

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
    PerfilPsicologoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
