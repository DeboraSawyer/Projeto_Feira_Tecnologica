import { TestBed } from '@angular/core/testing';

import { MarcarConsultaService } from './marcar-consulta.service';

describe('MarcarConsultaService', () => {
  let service: MarcarConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcarConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
