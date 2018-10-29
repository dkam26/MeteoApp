import { TestBed } from '@angular/core/testing';

import { QuerydataService } from './querydata.service';

describe('QuerydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuerydataService = TestBed.get(QuerydataService);
    expect(service).toBeTruthy();
  });
});
