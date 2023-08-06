import { TestBed } from '@angular/core/testing';

import { JwteService } from './jwte.service';

describe('JwteService', () => {
  let service: JwteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
