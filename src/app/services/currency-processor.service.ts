import { Observable } from 'rxjs/Observable';
import { CurrencyDetailsFactoryService } from './currency-details-factory.service';
import { CurrencyDetails } from './../models/currency-details';
import { CurrencyProviderService } from './currency-provider.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyProcessorService {

  private currency: CurrencyDetails;
  private mainDetails: any;

  constructor(private currencyProviderService: CurrencyProviderService,
    private currencyDetailsFactory: CurrencyDetailsFactoryService
  ) {
    this.currency = new CurrencyDetails();
  }

  getFullCurrencyDetails(currencyId: number): Observable<CurrencyDetails> {
    return this.currencyProviderService.getCoinDetailsById(currencyId)
      .map((res) => res.json())
      .map((res) => res.Data.General)
      .switchMap((details) => {
        this.mainDetails = details;
        return this.currencyProviderService.getCoinPriceConversions(this.mainDetails.Symbol);
      })
      .map((res) => res.json())
      .map((prices) => {
        this.currency = this.currencyDetailsFactory
          .createCurrencyDetails(currencyId, this.mainDetails, prices);

        return this.currency;
      });
  }
}
