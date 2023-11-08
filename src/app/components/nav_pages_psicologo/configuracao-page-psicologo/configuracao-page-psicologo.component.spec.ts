import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoPagePsicologoComponent } from './configuracao-page-psicologo.component';

describe('ConfiguracaoPagePsicologoComponent', () => {
  let component: ConfiguracaoPagePsicologoComponent;
  let fixture: ComponentFixture<ConfiguracaoPagePsicologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracaoPagePsicologoComponent]
    });
    fixture = TestBed.createComponent(ConfiguracaoPagePsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
