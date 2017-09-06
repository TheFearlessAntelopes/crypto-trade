import { TestBed, inject } from '@angular/core/testing';

import { CurrencyProcessorService } from './currency-processor.service';

describe('CurrencyProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyProcessorService]
    });
  });

  it('should be created', inject([CurrencyProcessorService], (service: CurrencyProcessorService) => {
    expect(service).toBeTruthy();
  }));
});
