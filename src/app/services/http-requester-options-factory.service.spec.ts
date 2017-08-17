import { TestBed, inject } from '@angular/core/testing';

import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';

describe('HttpRequesterOptionsFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequesterOptionsFactoryService]
    });
  });

  it('should be created', inject([HttpRequesterOptionsFactoryService], (service: HttpRequesterOptionsFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
