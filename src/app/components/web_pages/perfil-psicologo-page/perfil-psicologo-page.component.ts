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