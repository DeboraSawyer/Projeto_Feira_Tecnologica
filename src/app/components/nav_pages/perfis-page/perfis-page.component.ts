/*import { Component } from '@angular/core';

@Component({
  selector: 'app-perfis-page',
  templateUrl: './perfis-page.component.html',
  styleUrls: ['./perfis-page.component.css']
})
export class PerfisPageComponent {
  conteudo: string = 'Este é o conteúdo inicial.';
  conteudoAdicional: string = 'Este é o conteúdo adicional que aparece após clicar em "Ver mais".';
  mostrandoMais: boolean = false;
  botaoLabel: string = 'Ver mais';
  botaoClass: string = ''; // Classe do botão.

  toggleMostrarMais() {
    this.mostrandoMais = !this.mostrandoMais;
    this.botaoLabel = this.mostrandoMais ? 'Voltar' : 'Ver mais';
    this.botaoClass = this.mostrandoMais ? 'botao-voltar' : '';
  }
}*/

/* SEVIÇO SEM O BANCO. */
import { Component, OnInit } from '@angular/core';
import { PerfisPsicologosService } from 'src/app/services/perfis_page/perfis-psicologos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfis-page',
  templateUrl: './perfis-page.component.html',
  styleUrls: ['./perfis-page.component.css']
})

export class PerfisPageComponent implements OnInit {
  perfis: any[] = []; // Lista de todos os perfis.
  perfisVisiveis: any[] = []; // Lista para armazenar os Perfis visíveis.
  mostrarMais: boolean = false;
  botaoLabel: string = 'Ver Mais';

  constructor(
    private perfisService: PerfisPsicologosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.perfis = this.perfisService.obterPerfis();
    this.atualizarPerfisVisiveis(); // Inicializa os perfis visíveis.
  }

  toggleMostrarMais() {
    this.mostrarMais = !this.mostrarMais;
    this.botaoLabel = this.mostrarMais ? 'Voltar' : 'Ver Mais';
    this.atualizarPerfisVisiveis(); // Atualiza a lista de perfis visíveis.
  }

  atualizarPerfisVisiveis() {
    if (this.mostrarMais) {
      // Exibe todos os perfis.
      this.perfisVisiveis = this.perfis;
    } else {
      // Exibe os 6 primeiros perfis.
      this.perfisVisiveis = this.perfis.slice(0, 6);
    }
  }
}