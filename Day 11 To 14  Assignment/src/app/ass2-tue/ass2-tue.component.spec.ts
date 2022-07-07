import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass2TueComponent } from './ass2-tue.component';

describe('Ass2TueComponent', () => {
  let component: Ass2TueComponent;
  let fixture: ComponentFixture<Ass2TueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass2TueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass2TueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
