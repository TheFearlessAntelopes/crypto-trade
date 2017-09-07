import { TestBed, inject } from '@angular/core/testing';

import { CurrencyTransactionsService } from './currency-transactions.service';

describe('CurrencyTransactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyTransactionsService]
    });
  });

  it('should be created', inject([CurrencyTransactionsService], (service: CurrencyTransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
