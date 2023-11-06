import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPsicologoPageComponent } from './cadastro-psicologo-page.component';

describe('CadastroPsicologoPageComponent', () => {
  let component: CadastroPsicologoPageComponent;
  let fixture: ComponentFixture<CadastroPsicologoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPsicologoPageComponent]
    });
    fixture = TestBed.createComponent(CadastroPsicologoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
