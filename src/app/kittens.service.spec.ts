import { TestBed } from '@angular/core/testing';

import { KittensService } from './kittens.service';

describe('KittensService', () => {
  let service: KittensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KittensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
