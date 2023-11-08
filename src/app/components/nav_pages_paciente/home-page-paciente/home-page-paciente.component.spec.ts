import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePacienteComponent } from './home-page-paciente.component';

describe('HomePagePacienteComponent', () => {
  let component: HomePagePacienteComponent;
  let fixture: ComponentFixture<HomePagePacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePagePacienteComponent]
    });
    fixture = TestBed.createComponent(HomePagePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
