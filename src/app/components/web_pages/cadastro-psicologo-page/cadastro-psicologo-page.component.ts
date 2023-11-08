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

import { Component, OnInit } from '@angular/core';
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
}