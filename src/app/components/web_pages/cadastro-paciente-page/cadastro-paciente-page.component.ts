/*import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-paciente-page',
  templateUrl: './cadastro-paciente-page.component.html',
  styleUrls: ['./cadastro-paciente-page.component.css']
})
export class CadastroPacientePageComponent {

}*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-paciente-page',
  templateUrl: './cadastro-paciente-page.component.html',
  styleUrls: ['./cadastro-paciente-page.component.css']
})
export class CadastroPacientePageComponent {
  cadastrarUsuario(userData: any): void {

    const endpoint = 'http://seuDominio:4200//api/usuarios/registro';

    // Configuração do objeto de requisição
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };


    fetch(endpoint, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao cadastrar usuário');
        }
        return response.json();
      })
      .then(data => {

        console.log('Usuário cadastrado com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
}