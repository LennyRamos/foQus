import { TestBed } from '@angular/core/testing';

import { FoqusItemService } from './foqus-item.service';

describe('FoqusItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoqusItemService = TestBed.get(FoqusItemService);
    expect(service).toBeTruthy();
  });
});
