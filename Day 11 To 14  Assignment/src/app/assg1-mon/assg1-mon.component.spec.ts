import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assg1MonComponent } from './assg1-mon.component';

describe('Assg1MonComponent', () => {
  let component: Assg1MonComponent;
  let fixture: ComponentFixture<Assg1MonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assg1MonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assg1MonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
