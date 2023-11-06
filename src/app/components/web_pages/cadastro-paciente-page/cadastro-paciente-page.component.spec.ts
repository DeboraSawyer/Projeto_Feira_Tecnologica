import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacientePageComponent } from './cadastro-paciente-page.component';

describe('CadastroPacientePageComponent', () => {
  let component: CadastroPacientePageComponent;
  let fixture: ComponentFixture<CadastroPacientePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPacientePageComponent]
    });
    fixture = TestBed.createComponent(CadastroPacientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
