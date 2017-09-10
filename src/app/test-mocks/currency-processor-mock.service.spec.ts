import { TestBed, inject } from '@angular/core/testing';

import { CurrencyProcessorMockService } from './currency-processor-mock.service';

describe('CurrencyProcessorMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyProcessorMockService]
    });
  });

  it('should be created', inject([CurrencyProcessorMockService], (service: CurrencyProcessorMockService) => {
    expect(service).toBeTruthy();
  }));
});
