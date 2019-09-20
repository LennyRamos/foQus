import { TestBed } from '@angular/core/testing';

import { FoqusListService } from './foqus-list.service';

describe('FoqusListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoqusListService = TestBed.get(FoqusListService);
    expect(service).toBeTruthy();
  });
});
