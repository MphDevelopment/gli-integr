import { TestBed } from '@angular/core/testing';

import { EmpTAAService } from './emp-taa.service';

describe('EmpTAAService', () => {
  let service: EmpTAAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpTAAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
