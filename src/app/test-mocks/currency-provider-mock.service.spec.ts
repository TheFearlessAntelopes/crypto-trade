import { TestBed, inject } from '@angular/core/testing';

import { CurrencyProviderMockService } from './currency-provider-mock.service';

describe('CurrencyProviderMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyProviderMockService]
    });
  });

  // it('should be created', inject([CurrencyProviderMockService], (service: CurrencyProviderMockService) => {
  //   expect(service).toBeTruthy();
  // }));
});
