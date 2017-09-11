import { TestBed, inject } from '@angular/core/testing';

import { UserAuthServiceMockService } from './user-auth-service-mock.service';

describe('UserAuthServiceMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthServiceMockService]
    });
  });

  // it('should be created', inject([UserAuthServiceMockService], (service: UserAuthServiceMockService) => {
  //   expect(service).toBeTruthy();
  // }));
});
