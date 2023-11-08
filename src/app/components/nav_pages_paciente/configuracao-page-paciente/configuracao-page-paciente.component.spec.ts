import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoPagePacienteComponent } from './configuracao-page-paciente.component';

describe('ConfiguracaoPagePacienteComponent', () => {
  let component: ConfiguracaoPagePacienteComponent;
  let fixture: ComponentFixture<ConfiguracaoPagePacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracaoPagePacienteComponent]
    });
    fixture = TestBed.createComponent(ConfiguracaoPagePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
