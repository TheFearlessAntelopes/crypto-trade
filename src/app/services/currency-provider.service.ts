import { HttpRequesterOptions } from './../models/http-requester-options';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class CurrencyProviderService {

  private currencyListUrl = 'http://localhost:3000/currency/listAll';
  private currencyDetailsUrl = 'http://localhost:3000/currency/getDetailsById';
  private currencyPrices = 'http://localhost:3000/currency/priceConversions';
  private currencyPricesHistoday = 'http://localhost:3000/currency/historyPrice';

  private headersObj: {} = {
    'Content-Type': 'application/json',
  };

  constructor(private httpRequesterService: HttpRequesterService,
    private httpRequestOptionsFactory: HttpRequesterOptionsFactoryService) { }

  getAllCoinInformation(): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyListUrl, this.headersObj);

    return this.httpRequesterService.get(httpRequestOptions);
  }

  getCoinDetailsById(currencyId: number): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyDetailsUrl, { currencyId },
        this.headersObj);

    return this.httpRequesterService.post(httpRequestOptions);
  }

  getCoinPriceConversions(currencySymbol: string): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyPrices, { symbol: currencySymbol },
        this.headersObj);

    return this.httpRequesterService.post(httpRequestOptions);
  }
  getCoinIOHLCInformation(baseCurrency): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyPricesHistoday, { symbol: baseCurrency }, this.headersObj);

    return this.httpRequesterService.post(httpRequestOptions);
  }
}
