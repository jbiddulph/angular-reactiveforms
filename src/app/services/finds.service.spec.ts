import { TestBed } from '@angular/core/testing';

import { FindsService } from './finds.service';

describe('FindsService', () => {
  let service: FindsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
