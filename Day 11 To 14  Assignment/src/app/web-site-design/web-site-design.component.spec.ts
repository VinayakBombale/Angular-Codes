import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSiteDesignComponent } from './web-site-design.component';

describe('WebSiteDesignComponent', () => {
  let component: WebSiteDesignComponent;
  let fixture: ComponentFixture<WebSiteDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSiteDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSiteDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
