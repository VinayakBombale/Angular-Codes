import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass2monComponent } from './ass2mon.component';

describe('Ass2monComponent', () => {
  let component: Ass2monComponent;
  let fixture: ComponentFixture<Ass2monComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass2monComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass2monComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
