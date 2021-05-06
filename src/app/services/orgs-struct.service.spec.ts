import { TestBed } from '@angular/core/testing';

import { OrgsStructService } from './orgs-struct.service';

describe('OrgsStructService', () => {
  let service: OrgsStructService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgsStructService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
