import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass1TueComponent } from './ass1-tue.component';

describe('Ass1TueComponent', () => {
  let component: Ass1TueComponent;
  let fixture: ComponentFixture<Ass1TueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass1TueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass1TueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
