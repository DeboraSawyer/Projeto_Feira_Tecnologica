import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/nav_pages/home-page/home-page.component';
import { RecursosPageComponent } from './components/nav_pages/recursos-page/recursos-page.component';
import { ContatoPageComponent } from './components/nav_pages/contato-page/contato-page.component';
import { PerfisPageComponent } from './components/nav_pages/perfis-page/perfis-page.component';
import { LonginPageComponent } from './components/nav_pages/longin-page/longin-page.component';
import { TriagemPageComponent } from './components/nav_pages/triagem-page/triagem-page.component';
import { CadastroPageComponent } from './components/nav_pages/cadastro-page/cadastro-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'recursos', component: RecursosPageComponent},
  { path: 'perfis', component: PerfisPageComponent},
  { path: 'contato', component: ContatoPageComponent},
  { path: 'login', component: LonginPageComponent},
  { path: 'cadastrar', component: CadastroPageComponent},
  { path: 'triagem', component: TriagemPageComponent}
  // Adicionar mais caminhos.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
