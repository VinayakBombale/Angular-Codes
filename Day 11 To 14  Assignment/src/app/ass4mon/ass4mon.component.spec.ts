import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass4monComponent } from './ass4mon.component';

describe('Ass4monComponent', () => {
  let component: Ass4monComponent;
  let fixture: ComponentFixture<Ass4monComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass4monComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass4monComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
