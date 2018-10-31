import { TestBed } from '@angular/core/testing';

import { GetWeatherService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWeatherService = TestBed.get(GetWeatherService);
    expect(service).toBeTruthy();
  });
});
