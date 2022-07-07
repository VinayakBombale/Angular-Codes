import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedAss3Component } from './wed-ass3.component';

describe('WedAss3Component', () => {
  let component: WedAss3Component;
  let fixture: ComponentFixture<WedAss3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedAss3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WedAss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
