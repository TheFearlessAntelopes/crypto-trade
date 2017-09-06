import { HttpRequesterOptions } from './../models/http-requester-options';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class CurrencyProviderService {

  private minCurrencyProviderBaseUrl =
  `https://min-api.cryptocompare.com`;
  private currencyProviderBaseUrl =
  'https://www.cryptocompare.com';

  private currencyListUrl = this.currencyProviderBaseUrl + '/api/data/coinlist/';
  private currencyDetailsUrl = this.currencyProviderBaseUrl + '/api/data/coinsnapshotfullbyid/?id=';
  private currencyPrices = '/data/price?fsym=';
  private currencyPriceConversionValues = '&tsyms=BTC,USD,EUR';

  private headersObj: {} = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  };

  constructor(private httpRequesterService: HttpRequesterService,
    private httpRequestOptionsFactory: HttpRequesterOptionsFactoryService) { }

  getAllCoinInformation(): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyListUrl, this.headersObj);

    return this.httpRequesterService.get(httpRequestOptions);
  }

  getCoinDetailsById(currencyId: number): Observable<Response>  {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyDetailsUrl + currencyId,
        this.headersObj);

    return this.httpRequesterService.get(httpRequestOptions);
  }

  getCoinPriceConversions(currencySymbol: string): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(
          this.minCurrencyProviderBaseUrl + this.currencyPrices +
           currencySymbol + this.currencyPriceConversionValues,
        this.headersObj);

    return this.httpRequesterService.get(httpRequestOptions);
  }
  getCoinIOHLCInformation(baseCurrency): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        // tslint:disable-next-line:max-line-length
        .createRequestOptions(`${this.currencyProviderBaseUrl}/histoday?fsym=${baseCurrency}&tsym=USD&limit=1000`, this.headersObj);

    return this.httpRequesterService.get(httpRequestOptions);
  }
}
