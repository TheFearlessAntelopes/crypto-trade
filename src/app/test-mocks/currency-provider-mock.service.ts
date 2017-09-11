import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyProviderMockService {

  constructor() { }

  private iohlcInfo: {} = {
    result: {
      Data: new Array<Array<number>>()
    }
  };

  private coinListInfo: {} = {
    result: {
      Data: new Array<Array<number>>()
    }
  };

  private infoById: {} = {
    result: {
      Data: {
        General: {}
      }
    }
  };

  private priceConversion: {} = {
    result: {}
  };

  getAllCoinInformation(): Observable<any> {
    return Observable.of(this.coinListInfo);
  }

  getCoinDetailsById(currencyId: number): Observable<any> {
    return Observable.of(this.infoById);
  }

  getCoinPriceConversions(currencySymbol: string): Observable<any> {
    return Observable.of(this.priceConversion);
  }
  getCoinIOHLCInformation(baseCurrency): Observable<any> {
    return Observable.of(JSON.stringify(this.iohlcInfo));
  }
}
