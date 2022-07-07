import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedAss4Component } from './wed-ass4.component';

describe('WedAss4Component', () => {
  let component: WedAss4Component;
  let fixture: ComponentFixture<WedAss4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedAss4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WedAss4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
