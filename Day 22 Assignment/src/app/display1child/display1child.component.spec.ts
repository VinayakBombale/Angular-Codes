import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display1childComponent } from './display1child.component';

describe('Display1childComponent', () => {
  let component: Display1childComponent;
  let fixture: ComponentFixture<Display1childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display1childComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display1childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
