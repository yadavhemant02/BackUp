import { TestBed } from '@angular/core/testing';

import { CostomerdataService } from './costomerdata.service';

describe('CostomerdataService', () => {
  let service: CostomerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostomerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
