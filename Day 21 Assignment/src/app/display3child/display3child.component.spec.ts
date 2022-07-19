import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display3childComponent } from './display3child.component';

describe('Display3childComponent', () => {
  let component: Display3childComponent;
  let fixture: ComponentFixture<Display3childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display3childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display3childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
