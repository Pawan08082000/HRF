import { TestBed } from '@angular/core/testing';

import { RequirementStructureService } from './requirement-structure.service';

describe('RequirementStructureService', () => {
  let service: RequirementStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequirementStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
