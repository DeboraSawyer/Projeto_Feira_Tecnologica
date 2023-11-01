import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPsicologoPageComponent } from './perfil-psicologo-page.component';

describe('PerfilPsicologoPageComponent', () => {
  let component: PerfilPsicologoPageComponent;
  let fixture: ComponentFixture<PerfilPsicologoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPsicologoPageComponent]
    });
    fixture = TestBed.createComponent(PerfilPsicologoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
