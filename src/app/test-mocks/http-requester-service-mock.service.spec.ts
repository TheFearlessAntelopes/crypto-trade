import { TestBed, inject } from '@angular/core/testing';

import { HttpRequesterServiceMockService } from './http-requester-service-mock.service';

describe('HttpRequesterServiceMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequesterServiceMockService]
    });
  });

  // it('should be created', inject([HttpRequesterServiceMockService], (service: HttpRequesterServiceMockService) => {
  //   expect(service).toBeTruthy();
  // }));
});
