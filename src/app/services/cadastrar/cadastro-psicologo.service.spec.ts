import { TestBed } from '@angular/core/testing';

import { CadastroPsicologoService } from './cadastro-psicologo.service';

describe('CadastroPsicologoService', () => {
  let service: CadastroPsicologoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroPsicologoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
