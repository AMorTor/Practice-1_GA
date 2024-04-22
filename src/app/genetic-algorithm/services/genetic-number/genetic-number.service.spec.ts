import { TestBed } from '@angular/core/testing';

import { GeneticNumberService } from './genetic-number.service';

describe('GeneticNumberService', () => {
  let service: GeneticNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneticNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
