import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPsicologoComponent } from './nav-psicologo.component';

describe('NavPsicologoComponent', () => {
  let component: NavPsicologoComponent;
  let fixture: ComponentFixture<NavPsicologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPsicologoComponent]
    });
    fixture = TestBed.createComponent(NavPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
