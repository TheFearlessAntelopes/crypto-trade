import { TestBed, inject } from '@angular/core/testing';

import { CurrencyDetailsFactoryService } from './currency-details-factory.service';

describe('CurrencyDetailsFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyDetailsFactoryService]
    });
  });

  // it('should be created', inject([CurrencyDetailsFactoryService], (service: CurrencyDetailsFactoryService) => {
  //   expect(service).toBeTruthy();
  // }));
});
