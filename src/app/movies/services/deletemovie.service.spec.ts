import { TestBed } from '@angular/core/testing';

import { DeletemovieService } from './deletemovie.service';

describe('DeletemovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletemovieService = TestBed.get(DeletemovieService);
    expect(service).toBeTruthy();
  });
});
