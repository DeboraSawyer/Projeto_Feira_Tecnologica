import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriagemPageComponent } from './triagem-page.component';

describe('TriagemPageComponent', () => {
  let component: TriagemPageComponent;
  let fixture: ComponentFixture<TriagemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriagemPageComponent]
    });
    fixture = TestBed.createComponent(TriagemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
