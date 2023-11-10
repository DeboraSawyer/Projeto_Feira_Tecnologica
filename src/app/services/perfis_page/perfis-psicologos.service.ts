import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfisPsicologosService {
  // As informações dentro do Array serão postas no Banco de Dados.
  private perfis = [
    {
      id: 'perfil01',
      nome: 'Ana Albani',
      imagem_src: 'assets/imagens/ana_p.png',
      especialidade: 'Psicóloga Clínica',
      especializacao1: 'Terapia Cognitivo-Comportamental',
      especializacao2: 'Depressão',
      especializacao3: 'Transtornos de Ansiedade',
      abordagem: 'Minha abordagem terapêutica é baseada em evidências e se concentra na terapia cognitivo-comportamental. Minha missão é ajudar meus pacientes a desenvolver habilidades para lidar com o estresse e aprimorar seu bem-estar emocional.',
      biografia: 'Sou uma psicóloga clínica com mais de 10 anos de experiência no tratamento de transtornos de ansiedade e depressão.'
    },
    {
      id: 'perfil02',
      nome: 'Phillip Palmer',
      imagem_src: 'assets/imagens/phillip_p.png',
      especialidade: 'Psicólogo Organizacional e do Trabalho',
      especializacao1: 'Gestão de Equipes',
      especializacao2: 'Desenvolvimento de Habilidades de Comunicação',
      especializacao3: 'Estresse no Ambiente de Trabalho',
      abordagem: 'Minha abordagem terapêutica está focada na psicologia organizacional, visando melhorar o desempenho e o bem-estar dos colaboradores. Trabalho para criar ambientes de trabalho produtivos e saudáveis.',
      biografia: 'Tenho experiência em consultoria de recursos humanos e treinamento de liderança.'
    },
    {
      id: 'perfil03',
      nome: 'Veronika Vogel',
      imagem_src: 'assets/imagens/veronika_p.png',
      especialidade: 'Psicóloga Jurídica',
      especializacao1: 'Avaliação Psicológica em Processos Legais',
      especializacao2: 'Mediação de Conflitos',
      especializacao3: 'Apoio a Vítimas de Crimes',
      abordagem: 'Minha abordagem terapêutica está centrada na justiça, ajudando indivíduos envolvidos em processos legais a lidar com o estresse e tomar decisões informadas. Trabalho para promover a resolução pacífica de conflitos.',
      biografia: 'Atuo como psicóloga jurídica há mais de 10 anos, oferecendo suporte a clientes envolvidos em questões legais.'
    },
    {
      id: 'perfil04',
      nome: 'Edwin Eccel',
      imagem_src: 'assets/imagens/edwin_p.png',
      especialidade: 'Psicólogo Gestáltico',
      especializacao1: 'Abordagem Gestalt',
      especializacao2: 'Autenticidade e Autorrealização',
      especializacao3: 'Mindfulness',
      abordagem: 'Minha abordagem terapêutica é baseada na terapia gestalt, enfocando o momento presente, a autenticidade e a autorrealização. Trabalho para ajudar meus pacientes a se reconectarem consigo mesmos e a encontrarem equilíbrio.',
      biografia: 'Tenho experiência na aplicação da terapia gestalt para promover o autoconhecimento e o crescimento pessoal.'
    },
    {
      id: 'perfil05',
      nome: 'Rachel Reed',
      imagem_src: 'assets/imagens/rachel_p.png',
      especialidade: 'Psicóloga da Saúde',
      especializacao1: 'Apoio a Pacientes com Doenças Crônicas',
      especializacao2: 'Adesão ao Tratamento',
      especializacao3: 'Qualidade de Vida',
      abordagem: 'Minha abordagem terapêutica visa melhorar a saúde e o bem-estar de pacientes com doenças crônicas, auxiliando-os na adesão ao tratamento e na busca de uma melhor qualidade de vida. Trabalho para fortalecer a resiliência e a gestão da saúde.',
      biografia: 'Tenho ampla experiência em ajudar pacientes a enfrentar os desafios associados a doenças crônicas, promovendo uma vida saudável e equilibrada.'
    },
    {
      id: 'perfil06',
      nome: 'Takeshi Taddini',
      imagem_src: 'assets/imagens/takeshi_p.png',
      especialidade: 'Psicólogo do Esporte',
      especializacao1: 'Desempenho de Atletas',
      especializacao2: 'Gestão de Pressão Competitiva',
      especializacao3: 'Bem-Estar Mental no Esporte',
      abordagem: 'Minha abordagem terapêutica visa melhorar o desempenho esportivo, ajudando atletas a lidar com pressão e estresse. Trabalho para otimizar o equilíbrio entre mente e corpo.',
      biografia: 'Trabalho com atletas de alto rendimento, auxiliando-os a alcançar seu potencial máximo.'
    },
    {
      id: 'perfil07',
      nome: 'Sarah Stone',
      imagem_src: 'assets/imagens/sarah_p.png',
      especialidade: 'Psicóloga Escolar e Educacional',
      especializacao1: 'Apoio a Crianças com Necessidades Especiais',
      especializacao2: 'Orientação Vocacional',
      especializacao3: 'Gestão de Comportamento Escolar',
      abordagem: 'Minha abordagem terapêutica é centrada na criança, focada no desenvolvimento acadêmico e emocional. Trabalho em estreita colaboração com alunos, pais e professores para promover um ambiente educacional saudável.',
      biografia: 'Atuo como psicóloga escolar há 8 anos, auxiliando estudantes a alcançar seu potencial máximo.'
    },
    {
      id: 'perfil08',
      nome: 'Caique Campos',
      imagem_src: 'assets/imagens/caique_p.png',
      especialidade: 'Psicólogo Social',
      especializacao1: 'Desigualdade Social',
      especializacao2: 'Intervenções Comunitárias',
      especializacao3: 'Conflitos Interpessoais',
      abordagem: 'Minha abordagem terapêutica é baseada na psicologia social, concentrando-se em questões de justiça social e resolução de conflitos. Trabalho para promover a igualdade e a harmonia na sociedade.',
      biografia: 'Tenho experiência em projetos comunitários e na promoção da inclusão social.'
    },
    {
      id: 'perfil09',
      nome: 'Rebecca Ross',
      imagem_src: 'assets/imagens/rebecca_p.png',
      especialidade: 'Psicóloga do Desenvolvimento',
      especializacao1: 'Desenvolvimento Infantil',
      especializacao2: 'Apoio a Adolescentes em Transição',
      especializacao3: 'Envelhecimento Saudável',
      abordagem: 'Minha abordagem terapêutica é focada no desenvolvimento humano ao longo da vida, ajudando crianças, adolescentes e adultos a enfrentar desafios e transições. Trabalho para promover o crescimento pessoal em todas as fases da vida.',
      biografia: 'Tenho ampla experiência em acompanhar o desenvolvimento de indivíduos em diferentes estágios da vida.'
    },
    {
      id: 'perfil10',
      nome: 'Martin Mitchell',
      imagem_src: 'assets/imagens/martin_p.png',
      especialidade: 'Psicólogo Clínico Comportamental',
      especializacao1: 'Terapia Comportamental',
      especializacao2: 'Transtornos de Personalidade',
      especializacao3: 'Dependência Química',
      abordagem: 'Minha abordagem terapêutica é comportamental, enfocando mudanças de comportamento e promovendo a saúde mental. Trabalho para ajudar meus pacientes a superar desafios emocionais por meio da modificação de comportamentos disfuncionais.',
      biografia: 'Tenho uma vasta experiência no tratamento de transtornos de personalidade e dependência química.'
    },
    {
      id: 'perfil11',
      nome: 'Hana Hayashi',
      imagem_src: 'assets/imagens/hana_p.png',
      especialidade: 'Psicóloga Transcultural',
      especializacao1: 'Adaptação Cultural',
      especializacao2: 'Migração e Identidade',
      especializacao3: 'Conflitos Multiculturais',
      abordagem: 'Minha abordagem terapêutica é sensível à diversidade cultural, ajudando indivíduos a se adaptar e lidar com desafios de migração e identidade cultural. Trabalho para promover a compreensão intercultural.',
      biografia: 'Tenho experiência em auxiliar migrantes e refugiados a se integrar em novas culturas.'
    },
    {
      id: 'perfil12',
      nome: 'Bernardo Bitancurt',
      imagem_src: 'assets/imagens/bernardo_p.png',
      especialidade: 'Psicólogo Hospitalar',
      especializacao1: 'Apoio a Pacientes em Tratamento de Doenças Crônicas',
      especializacao2: 'Luto e Trauma',
      especializacao3: 'Bem-Estar em Ambiente Hospitalar',
      abordagem: 'Minha abordagem terapêutica é centrada no paciente, oferecendo apoio emocional a indivíduos enfrentando doenças e traumas. Trabalho para melhorar a qualidade de vida no ambiente hospitalar.',
      biografia: 'Atuo nessa modalidade há mais de 15 anos, proporcionando suporte emocional a pacientes e familiares.'
    }
  ];

  constructor() { }

  obterPerfis() {
    return this.perfis;
  }

  obterPerfilPorId(id: string) {
    return this.perfis.find((perfil) => perfil.id === id);
  }

  getProfessionalByName(name: string) {
    return this.perfis.find(profissional => profissional.nome === name);
  }
}

// Quando o banco de dados estiver pronto.
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfisPsicologosService {
  private apiUrl = 'http://localhost:3000'; // URL do servidor Node.js.

  constructor(private http: HttpClient) { }

  obterPerfisDoServidor(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/perfis`);
  }

  adicionarPerfilNoServidor(novoPerfil: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/perfis`, novoPerfil);
  }

  atualizarPerfilNoServidor(id: string, perfilAtualizado: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/perfis/${id}`, perfilAtualizado);
  }

  excluirPerfilDoServidor(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/perfis/${id}`);
  }
}*/