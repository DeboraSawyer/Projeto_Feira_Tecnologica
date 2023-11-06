import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPacientePageComponent } from './login-paciente-page.component';

describe('LoginPacientePageComponent', () => {
  let component: LoginPacientePageComponent;
  let fixture: ComponentFixture<LoginPacientePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPacientePageComponent]
    });
    fixture = TestBed.createComponent(LoginPacientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
