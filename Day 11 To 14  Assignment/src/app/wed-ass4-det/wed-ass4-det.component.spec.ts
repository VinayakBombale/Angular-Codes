import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedAss4DetComponent } from './wed-ass4-det.component';

describe('WedAss4DetComponent', () => {
  let component: WedAss4DetComponent;
  let fixture: ComponentFixture<WedAss4DetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedAss4DetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WedAss4DetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
