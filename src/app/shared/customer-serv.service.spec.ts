import { TestBed } from '@angular/core/testing';

import { CustomerServService } from './customer-serv.service';

describe('CustomerServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerServService = TestBed.get(CustomerServService);
    expect(service).toBeTruthy();
  });
});
