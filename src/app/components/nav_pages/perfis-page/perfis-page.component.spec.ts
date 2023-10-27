import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisPageComponent } from './perfis-page.component';

describe('PerfisPageComponent', () => {
  let component: PerfisPageComponent;
  let fixture: ComponentFixture<PerfisPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfisPageComponent]
    });
    fixture = TestBed.createComponent(PerfisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
