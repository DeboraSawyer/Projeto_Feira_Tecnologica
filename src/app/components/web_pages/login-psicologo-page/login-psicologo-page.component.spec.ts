import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPsicologoPageComponent } from './login-psicologo-page.component';

describe('LoginPsicologoPageComponent', () => {
  let component: LoginPsicologoPageComponent;
  let fixture: ComponentFixture<LoginPsicologoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPsicologoPageComponent]
    });
    fixture = TestBed.createComponent(LoginPsicologoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
