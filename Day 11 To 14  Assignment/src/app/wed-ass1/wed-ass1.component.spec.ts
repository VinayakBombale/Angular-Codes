import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedAss1Component } from './wed-ass1.component';

describe('WedAss1Component', () => {
  let component: WedAss1Component;
  let fixture: ComponentFixture<WedAss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedAss1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WedAss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
