import { CurrencyDetails } from './../models/currency-details';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyDetailsFactoryService {

  constructor() { }

  createCurrencyDetails(id: number, detailsObj: any, pricesObj: {}): CurrencyDetails {

    const details = {
      id: id,
      symbol: detailsObj.Symbol,
      fullName: detailsObj.H1Text,
      startDate: detailsObj.StartDate,
      image: detailsObj.ImageUrl,
      totalSupply: detailsObj.TotalCoinSupply,
      description: detailsObj.Description,
      priceConversions: pricesObj
    };

    return details;
  }
}
