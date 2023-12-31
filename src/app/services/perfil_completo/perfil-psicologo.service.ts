import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilPsicologoService {
  private psicologosCompletos: Record<string, any> = {
    'perfil01': {
      nome: 'Ana Albani',
      especialidade: 'Psicóloga Clínica',
      identificacao: '06/00000 - CRP - 6° Região São Paulo - SP',
      imagem_src: 'assets/imagens/ana_albani.png',
      especializacao1: 'Terapia Cognitivo-Comportamental',
      especializacao2: 'Depressão',
      especializacao3: 'Transtornos de Ansiedade',
      abordagem: 'Minha abordagem terapêutica é baseada em evidências e se concentra na terapia cognitivo-comportamental (TCC). Acredito que a TCC é uma ferramenta poderosa para ajudar meus pacientes a compreender e enfrentar seus desafios emocionais. Utilizando técnicas comprovadas, meu objetivo é auxiliar no desenvolvimento de habilidades para lidar com o estresse, superar a depressão e controlar os transtornos de ansiedade.',
      biografia: 'Com mais de uma década de experiência como psicóloga clínica, minha dedicação à saúde mental e ao bem-estar dos meus pacientes é inabalável. Desde o início da minha carreira, tenho trabalhado incansavelmente para proporcionar um ambiente de apoio e compreensão, onde meus pacientes se sintam à vontade para explorar suas emoções e desafios. Durante os anos de prática, desenvolvi uma paixão especial por auxiliar aqueles que enfrentam transtornos de ansiedade e depressão. Meu compromisso é ir além da superficialidade, mergulhando profundamente nas raízes desses transtornos para ajudar meus pacientes a entender, aceitar e superar suas dificuldades emocionais. Minha abordagem compassiva e livre de julgamentos tem permitido que muitos indivíduos encontrem a esperança, a cura e o crescimento pessoal. Além da minha prática clínica, também me dedico a educar a comunidade sobre saúde mental, ministrando palestras e workshops. Acredito que cada pessoa tem a capacidade de criar uma vida mais saudável e significativa. Minha missão como psicóloga é ser uma guia e apoiar meus pacientes em sua jornada em direção ao bem-estar emocional. Juntos, podemos explorar caminhos de autodescoberta, resiliência e autoaperfeiçoamento. Se você busca ajuda para enfrentar desafios emocionais, estou aqui para acompanhá-lo nessa jornada de transformação e crescimento.',
      formacao1: 'Mestrado em Psicologia Clínica pela Universidade XYZ.',
      formacao2: 'Bacharelado em Psicologia pela Universidade XYZ.',
      experiencia1: 'Mais de 10 anos de experiência como psicóloga clínica.',
      experiencia2: 'Especialização em Terapia Cognitivo-Comportamental.',
      experiencia3: 'Foco no tratamento de Depressão e Transtornos de Ansiedade.',
      atividade1: 'Palestrante e educadora em saúde mental.',
      atividade2: 'Autora de artigos acadêmicos e de autoajuda relacionados à saúde emocional.',
      atividade3: 'Facilitadora de grupos de apoio.',
      email: 'ana.albani@psicologaclinicaaobem.com',
      telefone: '+55 (11) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'A Dra. Ana é incrível! Ela me ajudou a superar minha ansiedade de uma forma que eu nunca pensei ser possível.',
      usuario1: '04750',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'O tratamento com a Dra. Ana foi transformador! Sinto-me mais confiante e em controle da minha ansiedade. Muito obrigado!',
      usuario2: '01903',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Muito profissional e acolhedora. Recomendo totalmente!',
      usuario3: '08276'
    },
    'perfil02': {
      nome: 'Phillip Palmer',
      especialidade: 'Psicólogo Organizacional e do Trabalho',
      identificacao: '08/00000 - CRP - 8° Região Curitiba - PR',
      imagem_src: 'assets/imagens/phillip_palmer.png',
      especializacao1: 'Gestão de Equipes',
      especializacao2: 'Desenvolvimento de Habilidades de Comunicação',
      especializacao3: 'Estresse no Ambiente de Trabalho',
      abordagem: 'Minha abordagem terapêutica está focada na psicologia organizacional, visando melhorar o desempenho e o bem-estar dos colaboradores. Trabalho para criar ambientes de trabalho produtivos e saudáveis.',
      biografia: 'Com uma sólida experiência na área de psicologia organizacional e recursos humanos, meu objetivo é facilitar o crescimento profissional e pessoal dos indivíduos. Acredito que um ambiente de trabalho saudável e equilibrado é essencial para o sucesso de uma organização. Tenho atuado como consultor em várias empresas, auxiliando na gestão de equipes, desenvolvimento de liderança e na redução do estresse no ambiente de trabalho. Minhas abordagens inovadoras e eficazes têm contribuído para melhorias significativas nas organizações em que trabalho.',
      formacao1: 'Mestrado em Psicologia Organizacional pela Universidade de ZYX.',
      formacao2: 'Bacharelado em Psicologia pela Universidade de ZYX.',
      experiencia1: 'Mais de 10 anos de experiência em psicologia organizacional.',
      experiencia2: 'Especialização em Gestão de Equipes e Comunicação.',
      experiencia3: 'Consultor em Recursos Humanos e Treinamento de Liderança.',
      atividade1: 'Palestrante em eventos de desenvolvimento profissional.',
      atividade2: 'Contribuições significativas para o campo de psicologia organizacional.',
      atividade3: '',
      email: 'phillip.palmer@psicologoorganizacionaledotrabalhoaobem.com',
      telefone: '+55 (41) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'O tratamento com o Dr. Palmer me ajudou a melhorar minha comunicação no ambiente de trabalho. Ele é incrível!',
      usuario1: '13579',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'O Dr. Palmer é um profissional excepcional! Sua abordagem foi transformadora para minha carreira.',
      usuario2: '24680',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo o Dr. Palmer para qualquer desafio no ambiente de trabalho. Ele é excelente!',
      usuario3: '86420'
    },
    'perfil03': {
      nome: 'Veronika Vogel',
      especialidade: 'Psicóloga Jurídica',
      identificacao: '12/00000 - CRP - 12° Região Florianópolis - SC',
      imagem_src: 'assets/imagens/veronika_vogel.png',
      especializacao1: 'Avaliação Psicológica em Processos Legais',
      especializacao2: 'Apoio a Vítimas de Crimes',
      especializacao3: 'Estresse no Ambiente de Trabalho',
      abordagem: 'Minha abordagem terapêutica está centrada na justiça, ajudando indivíduos envolvidos em processos legais a lidar com o estresse e tomar decisões informadas. Trabalho para promover a resolução pacífica de conflitos.',
      biografia: 'Atuo como psicóloga jurídica há mais de 10 anos, oferecendo suporte a clientes envolvidos em questões legais. Meu trabalho se concentra em avaliações psicológicas precisas, mediação de conflitos e apoio às vítimas de crimes. Minha experiência abrange uma variedade de casos legais, desde questões familiares até litígios complexos. Trabalho em estreita colaboração com advogados, juízes e outros profissionais do sistema judiciário para assegurar que os aspectos psicológicos das situações legais sejam abordados com sensibilidade e profissionalismo.',
      formacao1: 'Mestrado em Psicologia Jurídica pela Universidade ABC.',
      formacao2: 'Bacharelado em Psicologia pela Universidade ABC.',
      experiencia1: 'Mais de 10 anos de experiência como psicóloga jurídica.',
      experiencia2: 'Especialização em Avaliação Psicológica e Mediação de Conflitos Legais.',
      experiencia3: 'Trabalho em diversos casos legais, incluindo direito de família, criminal e civil.',
      atividade1: 'Colaboração com profissionais do sistema judiciário.',
      atividade2: '',
      atividade3: '',
      email: 'veronika.vogel@psicologajuridicaaobem.com',
      telefone: '+55 (47) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'A Dra. Vogel é uma profissional incrível! Seu apoio em processos legais faz toda a diferença.',
      usuario1: '35791',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou extremamente grato pela orientação da Dra. Vogel em um momento tão desafiador.',
      usuario2: '70234',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'A Dra. Vogel é a melhor escolha para qualquer questão legal. Muito profissional e confiável!',
      usuario3: '12580'
    },
    'perfil04': {
      nome: 'Edwin Eccel',
      especialidade: 'Psicólogo Gestáltico',
      identificacao: '04/00000 - CRP - 4° Região Belo Horizonte - MG',
      imagem_src: 'assets/imagens/edwin_eccel.png',
      especializacao1: 'Abordagem Gestalt',
      especializacao2: 'Autenticidade e Autorrealização',
      especializacao3: 'Mindfulness',
      abordagem: 'Minha abordagem terapêutica é baseada na terapia gestalt, enfocando o momento presente, a autenticidade e a autorrealização. Trabalho para ajudar meus pacientes a se reconectarem consigo mesmos e a encontrarem equilíbrio.',
      biografia: 'Tenho experiência na aplicação da terapia gestalt para promover o autoconhecimento e o crescimento pessoal. A terapia gestalt é uma abordagem holística que se concentra na compreensão das experiências e sentimentos no momento presente. Minha jornada como psicólogo gestáltico me levou a trabalhar com uma ampla gama de clientes, desde indivíduos em busca de autenticidade até aqueles que buscam equilibrar suas vidas. Acredito que a terapia gestalt pode ser transformadora, permitindo que os pacientes explorem sua singularidade e encontrem um sentido mais profundo em suas vidas.',
      formacao1: 'Mestrado em Psicologia Gestalt pela Universidade de CBA.',
      formacao2: 'Bacharelado em Psicologia pela Universidade de CBA.',
      experiencia1: 'Experiência profissional como psicólogo gestáltico.',
      experiencia2: 'Especialização em Abordagem Gestalt, Autenticidade e Mindfulness.',
      experiencia3: 'Facilitador de grupos de crescimento pessoal.',
      atividade1: 'Promotor da terapia gestalt como meio de autodescoberta e crescimento pessoal.',
      atividade2: '',
      atividade3: '',
      email: 'edwin.eccel@psicologogestalticoaobem.com',
      telefone: '+55 (31) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'O tratamento com o Dr. Eccel me ajudou a redescobrir minha autenticidade. Ele é incrível!',
      usuario1: '98765',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou impressionado com a abordagem do Dr. Eccel. Ele é um mestre da terapia gestalt.',
      usuario2: '54321',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo o Dr. Eccel para qualquer pessoa que busque crescimento pessoal. Ele é excepcional!',
      usuario3: '11223'
    },
    'perfil05': {
      nome: 'Rachel Reed',
      especialidade: 'Psicóloga da Saúde',
      identificacao: '10/00000 - CRP - 10° Região Belém - PA',
      imagem_src: 'assets/imagens/rachel_reed.png',
      especializacao1: 'Apoio a Pacientes com Doenças Crônicas',
      especializacao2: 'Adesão ao Tratamento',
      especializacao3: 'Qualidade de Vida',
      abordagem: 'Minha abordagem terapêutica visa melhorar a saúde e o bem-estar de pacientes com doenças crônicas, auxiliando-os na adesão ao tratamento e na busca de uma melhor qualidade de vida. Trabalho para fortalecer a resiliência e a gestão da saúde.',
      biografia: 'Tenho ampla experiência em ajudar pacientes a enfrentar os desafios associados a doenças crônicas, promovendo uma vida saudável e equilibrada. Minha carreira é dedicada a fornecer suporte psicológico a pacientes que enfrentam condições de saúde crônicas, ajudando-os a entender e gerenciar suas condições com eficácia. Meu trabalho se estende a diversas áreas da saúde, incluindo diabetes, doenças cardíacas, câncer e outras condições crônicas. Acredito que, através de uma abordagem centrada no paciente, podemos capacitar as pessoas a viverem suas vidas da melhor forma possível, independentemente das adversidades de saúde.',
      formacao1: 'Mestrado em Psicologia da Saúde pela Universidade GHI.',
      formacao2: 'Bacharelado em Psicologia pela Universidade GHI.',
      experiencia1: 'Mais de 10 anos de experiência como psicóloga da saúde.',
      experiencia2: 'Especialização em Apoio a Pacientes com Doenças Crônicas e Adesão ao Tratamento.',
      experiencia3: 'Trabalho com diversas condições de saúde crônicas.',
      atividade1: 'Palestrante em conferências de saúde.',
      atividade2: '',
      atividade3: '',
      email: 'rachel.reed@psicologadasaudeaobem.com',
      telefone: '+55 (91) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'A Dra. Reed é uma profissional notável! Seu apoio com doenças crônicas é inestimável.',
      usuario1: '65432',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou muito grato pelo apoio da Dra. Reed em minha jornada de saúde. Ela é incrível!',
      usuario2: '98765',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'A Dra. Reed é altamente qualificada e compassiva. Eu recomendo seus serviços a todos!',
      usuario3: '11223'
    },
    'perfil06': {
      nome: 'Takeshi Taddini',
      especialidade: 'Psicólogo do Esporte',
      identificacao: '18/00000 - CRP - 18° Região Cuiabá - MT',
      imagem_src: 'assets/imagens/takeshi_taddini.png',
      especializacao1: 'Desempenho de Atletas',
      especializacao2: 'Gestão de Pressão Competitiva',
      especializacao3: 'Bem-Estar Mental no Esporte',
      abordagem: 'Minha abordagem terapêutica visa melhorar o desempenho esportivo, ajudando atletas a lidar com pressão e estresse. Trabalho para otimizar o equilíbrio entre mente e corpo.',
      biografia: 'Trabalho com atletas de alto rendimento, auxiliando-os a alcançar seu potencial máximo. Minha carreira no campo da psicologia esportiva tem sido dedicada a ajudar atletas a enfrentar os desafios mentais associados à competição de elite. Colaboro com equipes esportivas, treinadores e atletas individuais para desenvolver estratégias que melhorem o desempenho, a concentração e a resiliência mental. Acredito que o bem-estar mental é um componente essencial do sucesso esportivo e estou comprometido em apoiar atletas em sua jornada para alcançar seu potencial.',
      formacao1: 'Mestrado em Psicologia do Esporte pela Universidade de IHG.',
      formacao2: 'Bacharelado em Psicologia pela Universidade de IHG.',
      experiencia1: 'Experiência profissional como psicólogo do esporte.',
      experiencia2: 'Especialização em Desempenho de Atletas e Gestão de Pressão Competitiva.',
      experiencia3: 'Colaboração com atletas de alto rendimento e equipes esportivas.',
      atividade1: 'Desenvolvimento de estratégias de bem-estar mental no esporte.',
      atividade2: '',
      atividade3: '',
      email: 'takeshi.taddini@psicologodoesporteaobem.com',
      telefone: '+55 (65) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'O tratamento com o Dr. Taddini melhorou significativamente meu desempenho no esporte. Ele é incrível!',
      usuario1: '87654',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou muito satisfeito com o trabalho do Dr. Taddini. Ele me ajudou a superar a pressão competitiva."',
      usuario2: '54321',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo o Dr. Taddini a todos os atletas que desejam alcançar seu máximo potencial. Ele é excepcional!',
      usuario3: '11223'
    },
    'perfil07': {
      nome: 'Sarah Stone',
      especialidade: 'Psicóloga Escolar e Educacional',
      identificacao: '05/00000 - CRP - 05° Região Rio de Janeiro - RJ',
      imagem_src: 'assets/imagens/sarah_stone.png',
      especializacao1: 'Apoio a Crianças com Necessidades Especiais',
      especializacao2: 'Orientação Vocacional',
      especializacao3: 'Gestão de Comportamento Escolar',
      abordagem: 'Minha abordagem terapêutica é centrada na criança, focada no desenvolvimento acadêmico e emocional. Trabalho em estreita colaboração com alunos, pais e professores para promover um ambiente educacional saudável.',
      biografia: 'Atuo como psicóloga escolar há 8 anos, auxiliando estudantes a alcançar seu potencial máximo. Minha carreira é dedicada a fornecer suporte psicológico a crianças e adolescentes, ajudando-os a enfrentar desafios acadêmicos e emocionais. Ao longo dos anos, tenho trabalhado com crianças com necessidades especiais, orientando alunos na escolha de carreiras e promovendo comportamentos saudáveis na escola. Minha paixão pela educação e bem-estar emocional me motiva a continuar fazendo a diferença na vida dos jovens.',
      formacao1: 'Mestrado em Psicologia Escolar e Educacional pela Universidade NOP.',
      formacao2: 'Bacharelado em Psicologia pela Universidade NOP.',
      experiencia1: '8 anos de experiência como psicóloga escolar.',
      experiencia2: 'Especialização em Apoio a Crianças com Necessidades Especiais, Orientação Vocacional e Gestão de Comportamento Escolar.',
      experiencia3: 'Trabalho com alunos de todas as idades.',
      atividade1: 'Colaboração com escolas e pais para promover um ambiente educacional saudável.',
      atividade2: '',
      atividade3: '',
      email: 'sarah.stone@psicologaescolareeducacionalaobem.com',
      telefone: '+55 (21) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'A Dra. Stone é incrível! Ela ajudou meu filho a superar desafios acadêmicos com compaixão e expertise.',
      usuario1: '09876',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou muito agradecido pelo apoio da Dra. Stone em orientação vocacional. Ela é excepcional',
      usuario2: '45678',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo a Dra. Stone a todas as famílias que buscam orientação educacional. Ela é altamente qualificada.',
      usuario3: '12345'
    },
    'perfil08': {
      nome: 'Caique Campos',
      especialidade: 'Psicólogo Social',
      identificacao: '19/00000 - CRP - 19° Região Aracaju - SE',
      imagem_src: 'assets/imagens/caique_campos.png',
      especializacao1: 'Desigualdade Social',
      especializacao2: 'Intervenções Comunitárias',
      especializacao3: 'Conflitos Interpessoais',
      abordagem: 'Minha abordagem terapêutica é baseada na psicologia social, concentrando-se em questões de justiça social e resolução de conflitos. Trabalho para promover a igualdade e a harmonia na sociedade.',
      biografia: 'Tenho experiência em projetos comunitários e na promoção da inclusão social. Minha carreira é dedicada a abordar questões sociais, desde a desigualdade até conflitos interpessoais. Colaboro com organizações não governamentais, grupos comunitários e agências governamentais para desenvolver estratégias que promovam a justiça social. Acredito que a psicologia social tem um papel fundamental na criação de sociedades mais justas e inclusivas.',
      formacao1: 'Mestrado em Psicologia Social pela Universidade de PON.',
      formacao2: 'Bacharelado em Psicologia pela Universidade de PON.',
      experiencia1: 'Experiência profissional como psicólogo social.',
      experiencia2: 'Especialização em Desigualdade Social, Intervenções Comunitárias e Conflitos Interpessoais.',
      experiencia3: 'Trabalho com organizações sociais e comunidades.',
      atividade1: 'Defensor da igualdade e justiça social.',
      atividade2: '',
      atividade3: '',
      email: 'caique.campos@psicologosocialaobem.com',
      telefone: '+55 (79) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'O trabalho do Dr. Campos é notável! Ele está fazendo a diferença na promoção da igualdade social.',
      usuario1: '65432',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou impressionado com as intervenções do Dr. Campos. Ele é um defensor da justiça social.',
      usuario2: '98765',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo o Dr. Campos a todos que buscam uma sociedade mais justa e inclusiva. Ele é excepcional!',
      usuario3: '11223'
    },
    'perfil09': {
      nome: 'Rebecca Ross',
      especialidade: 'Psicóloga do Desenvolvimento',
      identificacao: '13/00000 - CRP - 13° Região João Pessoa - PB',
      imagem_src: 'assets/imagens/rebecca_ross.png',
      especializacao1: 'Desenvolvimento Infantil',
      especializacao2: 'Apoio a Adolescentes em Transição',
      especializacao3: 'Envelhecimento Saudável',
      abordagem: 'Minha abordagem terapêutica é focada no desenvolvimento humano ao longo da vida, ajudando crianças, adolescentes e adultos a enfrentar desafios e transições. Trabalho para promover o crescimento pessoal em todas as fases da vida.',
      biografia: 'Tenho ampla experiência em acompanhar o desenvolvimento de indivíduos em diferentes estágios da vida. Minha carreira se concentra em ajudar crianças, adolescentes e adultos a enfrentar os desafios específicos de cada fase do desenvolvimento. Trabalho com famílias, escolas e indivíduos para promover o desenvolvimento saudável, fornecendo apoio em momentos de transição, como a entrada na escola, a adolescência e o envelhecimento. Acredito que o crescimento pessoal é um processo contínuo ao longo da vida, e estou comprometida em ajudar as pessoas a explorar seu potencial.',
      formacao1: 'Mestrado em Psicologia do Desenvolvimento pela Universidade DFG.',
      formacao2: 'Bacharelado em Psicologia pela Universidade DFG.',
      experiencia1: 'Experiência profissional como psicóloga do desenvolvimento.',
      experiencia2: 'Especialização em Desenvolvimento Infantil, Apoio a Adolescentes em Transição e Envelhecimento Saudável.',
      experiencia3: 'Trabalho com crianças, adolescentes e adultos em diferentes fases de vida.',
      atividade1: 'Facilitadora de grupos de apoio ao desenvolvimento pessoal.',
      atividade2: '',
      atividade3: '',
      email: 'rebecca.ross@psicologadodesenvolvimentoaobem.com',
      telefone: '+55 (81) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'A Dra. Ross é incrível! Ela ajudou meu filho adolescente a lidar com suas transições de forma saudável.',
      usuario1: '54321',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou muito grato pelo apoio da Dra. Ross em meu processo de envelhecimento saudável. Ela é excepcional!',
      usuario2: '87654',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo a Dra. Ross a todas as famílias que desejam promover o crescimento pessoal em todas as idades. Ela é altamente profissional.',
      usuario3: '09876'
    },
    'perfil10': {
      nome: 'Martin Mitchell',
      especialidade: 'Psicólogo Clínico Comportamental',
      identificacao: '01/00000 - CRP - 01° Região Brasília - DF',
      imagem_src: 'assets/imagens/martin_mitchell.png',
      especializacao1: 'Terapia Comportamental',
      especializacao2: 'Transtornos de Personalidade',
      especializacao3: 'Dependência Química',
      abordagem: 'Minha abordagem terapêutica é comportamental, enfocando mudanças de comportamento e promovendo a saúde mental. Trabalho para ajudar meus pacientes a superar desafios emocionais por meio da modificação de comportamentos disfuncionais.',
      biografia: 'Tenho uma vasta experiência no tratamento de transtornos de personalidade e dependência química. Minha carreira como psicólogo clínico comportamental tem sido dedicada a auxiliar os pacientes a identificar e modificar padrões de comportamento disfuncionais. Colaboro com indivíduos que enfrentam uma variedade de desafios emocionais, ajudando-os a desenvolver habilidades de enfrentamento e a promover a mudança positiva em suas vidas. Acredito que a terapia comportamental é uma abordagem eficaz para promover a saúde mental e o bem-estar.',
      formacao1: 'Mestrado em Psicologia Clínica Comportamental pela Universidade de GFD.',
      formacao2: 'Bacharelado em Psicologia pela Universidade de GFD.',
      experiencia1: 'Experiência profissional como psicólogo clínico comportamental.',
      experiencia2: 'Especialização em Terapia Comportamental, Transtornos de Personalidade e Dependência Química.',
      experiencia3: 'Trabalho com uma variedade de desafios emocionais.',
      atividade1: 'Aplicação de técnicas comportamentais para promover a saúde mental.',
      atividade2: '',
      atividade3: '',
      email: 'martin.mitchell@psicologoclinicocomportamentalaobem.com',
      telefone: '+55 (61) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'O tratamento com o Dr. Mitchell transformou minha vida. Ele é incrível na modificação de comportamentos disfuncionais.',
      usuario1: '24680',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou impressionado com a abordagem do Dr. Mitchell. Ele é um especialista em terapia comportamental.',
      usuario2: '35791',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo o Dr. Mitchell a todos que desejam superar desafios emocionais. Ele é excepcional na promoção da saúde mental.',
      usuario3: '12345'
    },
    'perfil11': {
      nome: 'Hana Hayashi',
      especialidade: 'Psicóloga Transcultural',
      identificacao: '06/00000 - CRP - 06° Região São Paulo - SP',
      imagem_src: 'assets/imagens/hana_hayashi.png',
      especializacao1: 'Adaptação Cultural',
      especializacao2: 'Migração e Identidade',
      especializacao3: 'Conflitos Multiculturais',
      abordagem: 'Minha abordagem terapêutica é sensível à diversidade cultural, ajudando indivíduos a se adaptar e lidar com desafios de migração e identidade cultural. Trabalho para promover a compreensão intercultural.',
      biografia: 'Tenho experiência em auxiliar migrantes e refugiados a se integrar em novas culturas. Minha carreira como psicóloga transcultural tem sido dedicada a apoiar indivíduos que enfrentam desafios relacionados à adaptação cultural, identidade e conflitos multiculturais. Colaboro com comunidades multiculturais, organizações de ajuda a refugiados e agências governamentais para promover a compreensão intercultural e facilitar a integração de pessoas de diferentes origens. Acredito que a diversidade cultural é uma riqueza e estou comprometida em promover um mundo mais inclusivo.',
      formacao1: 'Mestrado em Psicologia Transcultural pela Universidade KLM.',
      formacao2: 'Bacharelado em Psicologia pela Universidade KLM.',
      experiencia1: 'Experiência profissional como psicóloga transcultural.',
      experiencia2: 'Especialização em Adaptação Cultural, Migração e Identidade, Conflitos Multiculturais.',
      experiencia3: 'Colaboração com migrantes, refugiados e comunidades multiculturaiss.',
      atividade1: 'Defensora da diversidade cultural e da inclusão.',
      atividade2: '',
      atividade3: '',
      email: 'hana.hayashi@psicologatransculturalaobem.com',
      telefone: '+55 (11) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'A Dra. Hayashi é uma profissional incrível! Sua sensibilidade cultural é fundamental para ajudar migrantes e refugiados.',
      usuario1: '54321',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou muito grato pelo apoio da Dra. Hayashi em minha jornada de adaptação cultural. Ela é excepcional',
      usuario2: '65432',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo a Dra. Hayashi a todos que buscam compreensão intercultural. Ela é altamente profissional.',
      usuario3: '43210'
    },
    'perfil12': {
      nome: 'Bernardo Bitancurt',
      especialidade: 'Psicólogo Hospitalar',
      identificacao: '07/00000 - CRP - 07° Região Porto Alegre - RS',
      imagem_src: 'assets/imagens/bernardo_bitancurt.png',
      especializacao1: 'Apoio a Pacientes em Tratamento de Doenças Crônicas',
      especializacao2: 'Luto e Trauma',
      especializacao3: 'Bem-Estar em Ambiente Hospitalar',
      abordagem: 'Minha abordagem terapêutica é centrada no paciente, oferecendo apoio emocional a indivíduos enfrentando doenças e traumas. Trabalho para melhorar a qualidade de vida no ambiente hospitalar.',
      biografia: 'Atuo nessa modalidade há mais de 15 anos, proporcionando suporte emocional a pacientes e familiares. Minha carreira como psicólogo hospitalar é dedicada a ajudar pessoas que enfrentam desafios de saúde, incluindo doenças crônicas, luto e trauma. Colaboro com equipes de saúde em hospitais e clínicas, fornecendo suporte psicológico aos pacientes e às suas famílias. Acredito que a saúde mental desempenha um papel fundamental no processo de recuperação e bem-estar dos pacientes.',
      formacao1: 'Mestrado em Psicologia Hospitalar pela Universidade de KLM.',
      formacao2: 'Bacharelado em Psicologia pela Universidade de KLM.',
      experiencia1: 'Mais de 15 anos de experiência como psicólogo hospitalar.',
      experiencia2: 'Especialização em Apoio a Pacientes em Tratamento de Doenças Crônicas, Luto e Trauma, Bem-Estar em Ambiente Hospitalar.',
      experiencia3: 'Colaboração com equipes de saúde em hospitais e clínicas.',
      atividade1: 'Defensor do suporte emocional para pacientes e familiares em ambientes hospitalares.',
      atividade2: '',
      atividade3: '',
      email: 'bernardo.bitancurt@psicologohospitalaraobem.com',
      telefone: '+55 (51) 90000 - 0000',
      imagem_user1: 'assets/imagens/user.png',
      comentario1: 'O Dr. Bitancurt é incrível! Seu apoio emocional em ambientes hospitalares faz toda a diferença.',
      usuario1: '78901',
      imagem_user2: 'assets/imagens/user.png',
      comentario2: 'Estou muito grato pelo apoio do Dr. Bitancurt em momentos de luto e trauma. Ele é excepcional!',
      usuario2: '89012',
      imagem_user3: 'assets/imagens/user.png',
      comentario3: 'Recomendo o Dr. Bitancurt a todos que buscam melhorar a qualidade de vida no ambiente hospitalar. Ele é altamente profissional.',
      usuario3: '90123'
    },
  };

  constructor() { }

  obterInformacoesCompletas(id: string) {
    return this.psicologosCompletos[id];
  }
}














// Com o banco da dados.
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilPsicologoService {
  private apiUrl = 'http://localhost:3000'; // URL do servidor Node.js.

  constructor(private http: HttpClient) { }

    // Buscar perfis do banco de dados.
    obterPerfisDoBanco(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/perfis`);
    }
  
    // Buscar informações detalhadas de um perfil com base no ID.
    obterInformacoesDoBanco(id: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/perfil/${id}`);
    }
  
    // Adicionar um novo perfil ao banco de dados.
    adicionarPerfilNoBanco(novoPerfil: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/perfis`, novoPerfil);
    }
  
    // Atualizar as informações de um perfil no banco de dados.
    atualizarPerfilNoBanco(id: string, perfilAtualizado: any): Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/perfil/${id}`, perfilAtualizado);
    }
  
    // Excluir um perfil do banco de dados.
    excluirPerfilDoBanco(id: string): Observable<any> {
      return this.http.delete<any>(`${this.baseUrl}/perfil/${id}`);
    }
  }  
}*/