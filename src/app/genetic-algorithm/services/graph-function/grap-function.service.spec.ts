import { TestBed } from '@angular/core/testing';

import { GrapFunctionService } from './grap-function.service';

describe('GrapFunctionService', () => {
  let service: GrapFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrapFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
