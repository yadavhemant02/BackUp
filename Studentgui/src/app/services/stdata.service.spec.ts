import { TestBed } from '@angular/core/testing';

import { StdataService } from './stdata.service';

describe('StdataService', () => {
  let service: StdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
