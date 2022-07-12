import { TestBed } from '@angular/core/testing';

import { MsgDisplayService } from './msg-display.service';

describe('MsgDisplayService', () => {
  let service: MsgDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
