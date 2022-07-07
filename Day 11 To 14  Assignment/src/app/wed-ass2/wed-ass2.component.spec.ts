import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedAss2Component } from './wed-ass2.component';

describe('WedAss2Component', () => {
  let component: WedAss2Component;
  let fixture: ComponentFixture<WedAss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedAss2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WedAss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
