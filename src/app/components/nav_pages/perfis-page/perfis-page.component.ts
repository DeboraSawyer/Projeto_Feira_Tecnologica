/* SEVIÇO SEM O BANCO. */
import { Component, OnInit } from '@angular/core';
import { PerfisPsicologosService } from 'src/app/services/perfis_page/perfis-psicologos.service';
import { ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';

interface Profissional {
  id: string;
  nome: string;
  imagem_src: string;
  especialidade: string;
  especializacao1: string;
  especializacao2: string;
  especializacao3: string;
  abordagem: string;
  biografia: string;
}

@Component({
  selector: 'app-perfis-page',
  templateUrl: './perfis-page.component.html',
  styleUrls: ['./perfis-page.component.css']
})

export class PerfisPageComponent implements OnInit {

  specialties = [
    { name: 'Psicologia Clínica', value: 'psicologia_clinica' },
    { name: 'Psicologia Organizacional e do Trabalho', value: 'psicologia_organizacional' },
    { name: 'Psicologia Escolar e Educacional', value: 'psicologia_escolar' },
    { name: 'Psicologia Social', value: 'psicologia_social' },
    { name: 'Psicologia do Esporte', value: 'icologia_esporte' },
    { name: 'Psicologia do Tráfego', value: 'psicologia_trafego' },
    { name: 'Psicologia Hospitalar', value: 'psicologia_hostpitalar' },
    { name: 'Psicologia Jurídica', value: 'psicologia_juridica' },
    { name: 'Psicologia do Desenvolvimento', value: 'psicologia_desenvolvimento' },
    { name: 'Neuropsicologia', value: 'Neuropsicologia' },
    { name: 'Psicologia Clínica Comportamental', value: 'psicologia_comportamental' },
    { name: 'Psicologia da Saúde', value: 'psicologia_saude' },
    { name: 'Psicologia Familiar e de Casais', value: 'psicologia_familiar' },
    { name: 'Psicologia Positiva', value: 'sicologia_positiva' },
    { name: 'Psicologia Gerontológica', value: 'psicologia_gerontologica' },
    { name: 'Psicologia do Consumidor', value: 'psicologia_consumidor' },
    { name: 'Psicologia Transcultural', value: 'psicologia_transcultural' }
  ];

  selectedSpecialty = this.specialties[0].value;

  names: string[] = ['Ana Albani', 'Phillip Palmer', 'Veronika Vogel', 'Edwin Eccel', 'Rachel Reed', 'Takeshi Taddini', 'Sarah Stone', 'Caique Campos', 'Rebecca Ross', 'Martin Mitchell', 'Hana Hayashi', 'Bernardo Bitancurt'];

  searchTerm: string;
  filteredNames: string[];
  selectedProfessional: Profissional | null = null;

  perfis: any[] = []; // Lista de todos os perfis.
  perfisVisiveis: any[] = []; // Lista para armazenar os Perfis visíveis.
  mostrarMais: boolean = false;
  botaoLabel: string = 'Ver Mais';

  constructor(
    private perfisService: PerfisPsicologosService,
    private route: ActivatedRoute,
    private formsModulo: FormsModule
  ) {
    this.searchTerm = ''; // Inicializando searchTerm.
    this.filteredNames = []; // Inicializando filteredNames.
  }

  // Campo de texto.
  searching() {
    if (this.searchTerm) {
      this.filteredNames = this.names.filter(name => name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.filteredNames = [];
    }
  }

  selectName(name: string) {
    this.searchTerm = name;
    this.filteredNames = [];
  }

  getProfessionalByName(name: string) {
    return this.perfis.find(profissional => profissional.nome === name);
  }

  // Botão de Procura.
  search() {
    if (this.searchTerm) {
      // Chama a função para obter o profissional pelo nome
      const foundProfessional = this.perfisService.getProfessionalByName(this.searchTerm);

      // Se o profissional for encontrado, atualiza a propriedade selectedProfessional.
      if (foundProfessional) {
        this.selectedProfessional = foundProfessional;

        // Limpa o campo de busca.
        this.searchTerm = '';
      } else {
        //console.log('Profissional não encontrado.');
      }
    }
  }

  ngOnInit(): void {
    this.perfis = this.perfisService.obterPerfis();
    this.atualizarPerfisVisiveis(); // Inicializa os perfis visíveis.

    //console.log('Perfis Visíveis:', this.perfisVisiveis);
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

/* SEVIÇO COM O BANCO. */
/*import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.carregarPerfisDoServidor();
  }

  carregarPerfisDoServidor() {
    this.perfisService.obterPerfisDoServidor().subscribe(data => {
      this.perfis = data;
    });
  }

  adicionarPerfil() {
    const novoPerfil = { nome: 'Nome do Novo Perfil', especialidade: 'Especialidade do Novo Perfil' };
    this.perfisService.adicionarPerfilNoServidor(novoPerfil).subscribe(() => {
      this.carregarPerfisDoServidor();
    });
  }

  atualizarPerfil(id: string, perfilAtualizado: any) {
    this.perfisService.atualizarPerfilNoServidor(id, perfilAtualizado).subscribe(() => {
      this.carregarPerfisDoServidor();
    });
  }

  excluirPerfil(id: string) {
    this.perfisService.excluirPerfilDoServidor(id).subscribe(() => {
      this.carregarPerfisDoServidor();
    });
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
}*/