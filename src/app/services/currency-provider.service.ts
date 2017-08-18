import { HttpRequesterOptions } from './../models/http-requester-options';
import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyProviderService {

  private currencyProviderBaseUrl =
   `https://min-api.cryptocompare.com/`;

  private currencyCoinListUrl = 'https://www.cryptocompare.com/api/data/coinlist/';

  private headersObj: {} = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  };
  private xApiKey: string;
  private xApiSecret: string;

  constructor(private httprequesterService: HttpRequesterService,
    private httpRequestOptionsFactory: HttpRequesterOptionsFactoryService) { }

  getAllCoinInformation(): void {
    const httpRequestOptions: HttpRequesterOptions =
      this.httpRequestOptionsFactory
        .createRequestOptions(this.currencyCoinListUrl,
           {}, this.headersObj);

    this.httprequesterService.post(httpRequestOptions)
      .map((res) => res.json())
      .subscribe((response) => {
        // Logic for displaying currencies
        console.log(Object.keys(response.Data));
      }, (err) => {
        console.log(err);
      });
  }

}
