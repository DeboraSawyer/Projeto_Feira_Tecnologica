import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePsicologoComponent } from './home-page-psicologo.component';

describe('HomePagePsicologoComponent', () => {
  let component: HomePagePsicologoComponent;
  let fixture: ComponentFixture<HomePagePsicologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePagePsicologoComponent]
    });
    fixture = TestBed.createComponent(HomePagePsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
