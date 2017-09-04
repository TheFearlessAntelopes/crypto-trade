import { HttpRequesterOptions } from './../models/http-requester-options';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class CurrencyProviderService {

  private currencyProviderBaseUrl =
  `https://min-api.cryptocompare.com/data`;

  private currencyCoinListUrl = 'https://www.cryptocompare.com/api/data/coinlist/';

  private headersObj: {} = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  };
  private xApiKey: string;
  private xApiSecret: string;

  constructor(private httpRequesterService: HttpRequesterService,
    private httpRequestOptionsFactory: HttpRequesterOptionsFactoryService) { }

  getAllCoinInformation(): Observable<Response> {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyCoinListUrl, this.headersObj);

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
