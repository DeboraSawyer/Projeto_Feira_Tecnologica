import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonginPageComponent } from './longin-page.component';

describe('LonginPageComponent', () => {
  let component: LonginPageComponent;
  let fixture: ComponentFixture<LonginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LonginPageComponent]
    });
    fixture = TestBed.createComponent(LonginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
