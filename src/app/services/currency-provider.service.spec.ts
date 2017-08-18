import { TestBed, inject } from '@angular/core/testing';

import { CurrencyProviderService } from './currency-provider.service';

describe('CurrencyProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyProviderService]
    });
  });

  it('should be created', inject([CurrencyProviderService], (service: CurrencyProviderService) => {
    expect(service).toBeTruthy();
  }));
});
