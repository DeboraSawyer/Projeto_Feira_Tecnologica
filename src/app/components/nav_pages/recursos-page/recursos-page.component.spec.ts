import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosPageComponent } from './recursos-page.component';

describe('RecursosPageComponent', () => {
  let component: RecursosPageComponent;
  let fixture: ComponentFixture<RecursosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursosPageComponent]
    });
    fixture = TestBed.createComponent(RecursosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
