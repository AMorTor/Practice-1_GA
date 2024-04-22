import { TestBed } from '@angular/core/testing';

import { GenerateValuesService } from './generate-values.service';

describe('GenerateValuesService', () => {
  let service: GenerateValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
