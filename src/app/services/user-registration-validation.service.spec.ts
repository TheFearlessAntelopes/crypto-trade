import { TestBed, inject } from '@angular/core/testing';

import { UserRegistrationValidationService } from './user-registration-validation.service';

describe('UserRegistrationValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRegistrationValidationService]
    });
  });

  // it('should be created', inject([UserRegistrationValidationService], (service: UserRegistrationValidationService) => {
  //   expect(service).toBeTruthy();
  // }));
});
