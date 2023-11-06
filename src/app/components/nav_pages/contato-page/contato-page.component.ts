import { Component } from '@angular/core';

@Component({
  selector: 'app-contato-page',
  templateUrl: './contato-page.component.html',
  styleUrls: ['./contato-page.component.css']
})
/*export class ContatoPageComponent {
  mensagemEnviada: boolean = false;

  enviarMensagem(): void {
    const mensagem = document.getElementById("mensagem") as HTMLInputElement;
    const valorDaMensagem = mensagem.value;

    if (valorDaMensagem.trim() !== "") {
      alert("Mensagem enviada: " + valorDaMensagem);
    } else {
      alert("Campo de mensagem é obrigatório");
    }
  }
}*/

export class ContatoPageComponent {
  mensagemEnviada: boolean = false;
  nome: string = '';
  email: string = '';
  mensagem: string = '';

  enviarMensagem(): void {
    if (this.mensagem.trim() !== "") {


      this.mensagemEnviada = true;
    } else {
      alert("Campo de mensagem é obrigatório");
    }
  }
}