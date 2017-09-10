import { CurrencyDetails } from './../models/currency-details';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyProcessorMockService {
  constructor() { }

  getFullCurrencyDetails(currencyId: number): Observable<CurrencyDetails> {
    const details: CurrencyDetails = new CurrencyDetails();
    return Observable.of(details);
  }
}
