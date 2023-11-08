/*import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-psicologo',
  templateUrl: './nav-psicologo.component.html',
  styleUrls: ['./nav-psicologo.component.css']
})
export class NavPsicologoComponent {
  isMenuOpen: boolean = true;

  constructor(private router: Router) { }


  shouldShowMenuLateral(): boolean {
    // Verifica a rota ativa e decide se o menu deve ser exibido ou ocultado

    const rotaAtiva = this.router.url;
    return rotaAtiva === '/painel-psicologo' || rotaAtiva === '/home-psicologo';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  shouldShowMenuLateral1() {
    return this.isMenuOpen; // Adicione sua lógica existente aqui, se necessário.
  }

}*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-psicologo',
  templateUrl: './nav-psicologo.component.html',
  styleUrls: ['./nav-psicologo.component.css']
})
export class NavPsicologoComponent {
  isMenuClosed: boolean = true;

  constructor(private router: Router) { }

  shouldShowMenuLateral(): boolean {
    // Verifica a rota ativa e decide se o menu deve ser exibido ou ocultado
    const rotaAtiva = this.router.url;
    return rotaAtiva === '/painel-psicologo' || rotaAtiva === '/home-psicologo';
  }

  toggleMenu() {
    this.isMenuClosed =! this.isMenuClosed;
  }

  shouldShowMenuLateral1() {
    return this.isMenuClosed; // Adicione sua lógica existente aqui, se necessário.
  }
}