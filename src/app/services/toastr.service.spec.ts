import { ToastrService } from './toastr.service';
import { TestBed, inject } from '@angular/core/testing';


describe('NotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrService]
    });
  });

  // it('should be created', inject([ToastrService], (service: ToastrService) => {
  //   expect(service).toBeTruthy();
  // }));
});
