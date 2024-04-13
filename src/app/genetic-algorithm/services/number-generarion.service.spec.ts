import { TestBed } from '@angular/core/testing';

import { NumberGenerarionService } from './number-generarion.service';

describe('NumberGenerarionService', () => {
  let service: NumberGenerarionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberGenerarionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
