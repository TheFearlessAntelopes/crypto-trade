import { TestBed, inject } from '@angular/core/testing';

import { HttpRequesterService } from './http-requester.service';

describe('HttpRequesterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequesterService]
    });
  });

  it('should be created', inject([HttpRequesterService], (service: HttpRequesterService) => {
    expect(service).toBeTruthy();
  }));
});
