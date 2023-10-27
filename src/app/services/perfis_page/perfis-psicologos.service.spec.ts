import { TestBed } from '@angular/core/testing';

import { PerfisPsicologosService } from './perfis-psicologos.service';

describe('PerfisPsicologosService', () => {
  let service: PerfisPsicologosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfisPsicologosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
