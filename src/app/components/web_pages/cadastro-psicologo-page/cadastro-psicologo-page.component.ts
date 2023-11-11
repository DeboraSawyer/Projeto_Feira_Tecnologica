/*import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service'

@Component({
  selector: 'app-cadastro-psicologo-page',
  templateUrl: './cadastro-psicologo-page.component.html',
  styleUrls: ['./cadastro-psicologo-page.component.css']
})
export class CadastroPsicologoPageComponent {
  tasks: any[] = [];
  newTask: any = { title: '', description: '' };
  newPsicologo: any = {
    nome: '',
    email: '',
    telefone: '',
    data_nascimento: '',
    cpf: '',
    crp: '',
    senha: ''   
  }

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask(): void {
    this.taskService.addTask(this.newTask).subscribe((data) => {
      this.tasks.push(data);
      this.newTask = { title: '', description: '' };
    });
  }

  addPsicologo(psicologo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/psicologos`, psicologo);
  }

  cadastrarPsicologo(): void {
    this.taskService.cadastrarPsicologo(this.newPsicologo).subscribe((data) => {
      // Lide com a resposta do servidor, por exemplo, exibindo uma mensagem de sucesso.
    });
  }

}*/

/*import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-psicologo-page',
  templateUrl: './cadastro-psicologo-page.component.html',
  styleUrls: ['./cadastro-psicologo-page.component.css']
})
export class CadastroPsicologoPageComponent implements OnInit {
  //tasks: any[] = [];
  //newTask: any = { title: '', description: '' };
  newPsicologo: any = {
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    crp: '',
    senha: ''
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //this.taskService.getTasks().subscribe((data) => {
     // this.tasks = data;
    //});
  }

  cadastrarPsicologo(): void {
    this.taskService.addPsicologo(this.newPsicologo).subscribe((data) => {
      console.log('O psicólogo foi CADASTRADO!');
    });
  }
}*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-psicologo-page',
  templateUrl: './cadastro-psicologo-page.component.html',
  styleUrls: ['./cadastro-psicologo-page.component.css']
})
export class CadastroPsicologoPageComponent {
  // Suponha que você tenha alguns dados para enviar ao backend
  dadosParaEnviar = {
    nome: 'Nome do Psicólogo',
    crp: '12345',

  };

  cadastrarPsicologo(): void {

    const url = 'http://seuDominio:4200/api/psicologo';

    // Configurar a solicitação
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.dadosParaEnviar),
    };

    // Fazer a solicitação usando fetch
    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao cadastrar psicólogo');
        }
        return response.json();
      })
      .then(data => {
        // Lidar com a resposta do backend
        console.log('Resposta do backend:', data);

      })
      .catch(error => {
        console.error('Erro durante a solicitação:', error);

      });
  }
}