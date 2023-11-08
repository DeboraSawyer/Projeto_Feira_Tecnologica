import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPacienteComponent } from './nav-paciente.component';

describe('NavPacienteComponent', () => {
  let component: NavPacienteComponent;
  let fixture: ComponentFixture<NavPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPacienteComponent]
    });
    fixture = TestBed.createComponent(NavPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
