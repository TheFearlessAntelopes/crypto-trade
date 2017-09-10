import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpRequesterService } from './http-requester.service';
import { TestBed, inject } from '@angular/core/testing';
import { CurrencyDetailsFactoryService } from './currency-details-factory.service';
import { CurrencyDetails } from './../models/currency-details';
import { CurrencyProviderService } from './currency-provider.service';
import { CurrencyProcessorService } from './currency-processor.service';

describe('CurrencyProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrencyProcessorService,
        ConnectionBackend,
        RequestOptions,
        Http,
        CurrencyDetailsFactoryService,
        CurrencyProviderService,
        HttpRequesterService,
        CurrencyDetails
      ],
    });
  });

  // it('should be created', inject([CurrencyProcessorService], (service: CurrencyProcessorService) => {
  //   expect(service).toBeTruthy();
  // }));
});
