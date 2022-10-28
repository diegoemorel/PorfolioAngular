import { TestBed } from '@angular/core/testing';

import { UsserServiceService } from './usser-service.service';

describe('UsserServiceService', () => {
  let service: UsserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
