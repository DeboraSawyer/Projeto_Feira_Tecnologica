import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilPsicologoService } from 'src/app/services/perfil_completo/perfil-psicologo.service';

@Component({
  selector: 'app-perfil-psicologo-page',
  templateUrl: './perfil-psicologo-page.component.html',
  styleUrls: ['./perfil-psicologo-page.component.css']
})
export class PerfilPsicologoPageComponent implements OnInit {
  psicologo: any | null; // Objeto para armazenar as informações completas do psicólogo.

  constructor(
    private route: ActivatedRoute,
    private perfilPsicologoService: PerfilPsicologoService
  ) { }

  ngOnInit(): void {
    // Captura o ID do psicólogo da rota.
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Usa o serviço 'PerfilPsicologoService' para obter as informações completas do psicólogo com base no ID.
      this.psicologo = this.perfilPsicologoService.obterInformacoesCompletas(id);
    } else {
      // Vou tratar o caso em que 'id' é nulo (por exemplo, redirecionar para uma página de erro).
      // this.router.navigate(['/pagina-de-erro']); // Preciso injetar o serviço de roteamento.
    }
  }
}

/*let sections = document.querySelectorAll('section');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    
    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }else {
      sec.classList.remove('show-animate')
    }
  });
}*/


// Com o Banco de Dados.
/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilPsicologoService } from 'src/app/services/perfil_completo/perfil-psicologo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-psicologo-page',
  templateUrl: './perfil-psicologo-page.component.html',
  styleUrls: ['./perfil-psicologo-page.component.css']
})
export class PerfilPsicologoPageComponent implements OnInit {
  psicologo: any | null; // Objeto para armazenar as informações completas do psicólogo.
  atualizando: boolean = false; // Indica se está no modo de atualização.
  perfilId: string | null = null; // Rastreia o ID do perfil atual.

  perfilForm: FormGroup; // Formulário para adicionar/atualizar o perfil.

  constructor(
    private route: ActivatedRoute,
    private perfilPsicologoService: PerfilPsicologoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Captura o ID do psicólogo da rota.
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.perfilId = id;
      this.atualizando = true;
      // Usa o serviço 'PerfilPsicologoService' para obter as informações completas do psicólogo com base no ID.
      this.perfilPsicologoService.obterInformacoesDoBanco(id).subscribe(
        (perfil) => {
          // Lida com as informações detalhadas do perfil, exibindo elas no template.
          this.psicologo = perfil;
        },
        (error) => {
          // Lida com erros, por exemplo, exibindo uma mensagem de erro.
          console.error('Erro ao buscar informações do perfil do banco de dados:', error);
        }
      );
    } else {
      // Cria o formulário para adicionar um novo perfil.
      this.perfilForm = this.formBuilder.group({
        nome: ['', Validators.required],
        especialidade: ['', Validators.required],
        // Adicione outros campos e validações apropriadas.
      });
    }
  }

  // Método para adicionar/atualizar um perfil no banco de dados.
  salvarPerfil() {
    if (this.perfilForm.valid) {
      const perfilData = this.perfilForm.value;

      if (this.atualizando && this.perfilId) {
        // Atualiza um perfil existente.
        this.perfilPsicologoService.atualizarPerfilNoBanco(this.perfilId, perfilData).subscribe(
          (response) => {
            // Lida com a resposta de sucesso, por exemplo, exibindo uma mensagem ao usuário.
            console.log('Perfil atualizado com sucesso:', response);

            // Redireciona para a página de detalhes do perfil atualizado ou atualiza a lista de perfis.
            this.router.navigate(['/perfil/' + this.perfilId]);
          },
          (error) => {
            // Lida com erros, por exemplo, exibindo uma mensagem de erro.
            console.error('Erro ao atualizar perfil:', error);
          }
        );
      } else {
        // Adiciona um novo perfil.
        this.perfilPsicologoService.adicionarPerfilNoBanco(perfilData).subscribe(
          (response) => {
            // Lida com a resposta de sucesso, por exemplo, exibindo uma mensagem ao usuário.
            console.log('Perfil adicionado com sucesso:', response);

            // Redireciona para a página de detalhes do perfil recém-criado ou atualiza a lista de perfis.
            this.router.navigate(['/perfil/' + response.id]); // Supondo que a resposta inclui um ID do novo perfil.
          },
          (error) => {
            // Lida com erros, por exemplo, exibindo uma mensagem de erro.
            console.error('Erro ao adicionar perfil:', error);
          }
        );
      }
    }
  }

  // Método para excluir um perfil do banco de dados.
  excluirPerfil() {
    if (this.perfilId) {
      this.perfilPsicologoService.excluirPerfilDoBanco(this.perfilId).subscribe(
        () => {
          // Lida com a exclusão com sucesso, por exemplo, redirecionando para uma página ou atualizando a lista de perfis.
          this.router.navigate(['/outra-pagina']); // Redireciona para outra página após a exclusão bem-sucedida.
        },
        (error) => {
          // Lida com erros, por exemplo, exibindo uma mensagem de erro.
          console.error('Erro ao excluir perfil:', error);
        }
      );
    }
  }
}*/