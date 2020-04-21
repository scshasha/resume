import { TestBed } from '@angular/core/testing';

import { LaraService } from './lara.service';

describe('LaraService', () => {
  let service: LaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
