import { TestBed } from '@angular/core/testing';

import { RoastService } from './roast.service';

describe('RoastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoastService = TestBed.get(RoastService);
    expect(service).toBeTruthy();
  });
});
