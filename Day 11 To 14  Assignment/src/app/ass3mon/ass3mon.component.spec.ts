import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass3monComponent } from './ass3mon.component';

describe('Ass3monComponent', () => {
  let component: Ass3monComponent;
  let fixture: ComponentFixture<Ass3monComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass3monComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass3monComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
