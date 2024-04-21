import { TestBed } from '@angular/core/testing';

import { NumberGenetarationService } from './number-genetaration.service';

describe('NumberGenetarationService', () => {
  let service: NumberGenetarationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberGenetarationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
