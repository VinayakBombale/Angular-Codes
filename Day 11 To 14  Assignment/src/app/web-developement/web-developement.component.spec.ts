import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopementComponent } from './web-developement.component';

describe('WebDevelopementComponent', () => {
  let component: WebDevelopementComponent;
  let fixture: ComponentFixture<WebDevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevelopementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
