import { TestBed } from '@angular/core/testing';

import { HrRolesService } from './hr-roles.service';

describe('HrRolesService', () => {
  let service: HrRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
