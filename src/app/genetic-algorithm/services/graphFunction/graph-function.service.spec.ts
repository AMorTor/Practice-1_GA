import { TestBed } from '@angular/core/testing';

import { GraphFunctionService } from './graph-function.service';

describe('GraphFunctionService', () => {
  let service: GraphFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
