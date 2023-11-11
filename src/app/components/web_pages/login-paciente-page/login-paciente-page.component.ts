import { Component } from '@angular/core';

@Component({
  selector: 'app-login-paciente-page',
  templateUrl: './login-paciente-page.component.html',
  styleUrls: ['./login-paciente-page.component.css']
})
export class LoginPacientePageComponent {
  private apiUrl = 'http://seuDominio:4200/api/usuarios/login';

  // Dados do formulário
  email: string = '';
  senha: string = '';

  // Método para realizar o login
  fazerLogin(): void {
    // Cria um objeto com os dados do formulário
    const dados = {
      email: this.email,
      senha: this.senha
    };

    // Faz a requisição para o backend usando o fetch
    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
      .then(response => response.json())
      .then(data => {
        // Lida com a resposta do backend
        console.log('Resposta do servidor:', data);


      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        // Lida com erros, por exemplo, mostrando uma mensagem de erro ao usuário
      });
  }
}