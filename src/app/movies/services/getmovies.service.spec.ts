import { TestBed } from '@angular/core/testing';

import { GetmoviesService } from './getmovies.service';

describe('GetmoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetmoviesService = TestBed.get(GetmoviesService);
    expect(service).toBeTruthy();
  });
});
