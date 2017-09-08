import { HttpRequesterOptionsFactoryService } from './http-requester-options-factory.service';
import { HttpRequesterService } from './http-requester.service';
import { UserAuthService } from './user-auth.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyTransactionsService {

  // private userCurrencies: Array<UserCurrency>;
  private serverBaseUrl = 'http://localhost:3000';
  private headersObj: {} = { 'Content-Type': 'application/json' };
  private buyUrl = this.serverBaseUrl + '/user/buy';
  private sellUrl = this.serverBaseUrl + '/user/sell';

  constructor(private userService: UserService,
    private userAuthService: UserAuthService,
    private httpRequesterService: HttpRequesterService,
    private httpRequesterOptionsService: HttpRequesterOptionsFactoryService) { }

  getUserCurrencies() {
    return this.userService.getUserCurrencies()
      .map((res) => res.json());
  }

  buyCurrency(currencySymbol: string, currencyBuyPrice: Number, quantity: Number) {
    const body = {
      user: this.userAuthService.getLoggedUser(),
      info: {
        currencySymbol: currencySymbol,
        buyPrice: currencyBuyPrice,
        quantity: quantity,
      }
    };

    const httpsRequestHeaders = this.httpRequesterOptionsService
      .createRequestOptions(this.buyUrl, body, this.headersObj);

    return this.httpRequesterService.post(httpsRequestHeaders);
  }

  sellCurrency(currencySymbol: string, currencySellPrice: Number, quantity: Number) {
    const body = {
      user: this.userAuthService.getLoggedUser(),
      info: {
        currencySymbol: currencySymbol,
        sellPrice: currencySellPrice,
        quantity: quantity,
      }
    };

    const httpsRequestHeaders = this.httpRequesterOptionsService
      .createRequestOptions(this.sellUrl, body, this.headersObj);

    return this.httpRequesterService.post(httpsRequestHeaders);
  }

}
