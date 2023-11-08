import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) { }

  shouldShowFooter(): boolean {

    const routesToHideFooter = ['/painel-psicologo', '/home-psicologo', '/'];

    return !routesToHideFooter.includes(this.router.url); // Verifica se a rota ativa está na lista de rotas a serem ocultadas.
  }

}
