import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display2childComponent } from './display2child.component';

describe('Display2childComponent', () => {
  let component: Display2childComponent;
  let fixture: ComponentFixture<Display2childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display2childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
