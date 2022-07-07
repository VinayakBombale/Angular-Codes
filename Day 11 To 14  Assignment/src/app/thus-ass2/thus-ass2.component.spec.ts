import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThusAss2Component } from './thus-ass2.component';

describe('ThusAss2Component', () => {
  let component: ThusAss2Component;
  let fixture: ComponentFixture<ThusAss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThusAss2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThusAss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
