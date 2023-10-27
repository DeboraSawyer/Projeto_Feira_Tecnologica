import { TestBed } from '@angular/core/testing';

import { PerfilPsicologoService } from './perfil-psicologo.service';

describe('PerfilPsicologoService', () => {
  let service: PerfilPsicologoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilPsicologoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
