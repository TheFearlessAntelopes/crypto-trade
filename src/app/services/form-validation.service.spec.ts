import { FormValidationService } from './form-validation.service';
import { TestBed, inject } from '@angular/core/testing';


describe('UserRegistrationValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormValidationService]
    });
  });

  // it('should be created', inject([UserRegistrationValidationService], (service: UserRegistrationValidationService) => {
  //   expect(service).toBeTruthy();
  // }));
});
