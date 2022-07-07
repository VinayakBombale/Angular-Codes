import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThusAss1Component } from './thus-ass1.component';

describe('ThusAss1Component', () => {
  let component: ThusAss1Component;
  let fixture: ComponentFixture<ThusAss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThusAss1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThusAss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
