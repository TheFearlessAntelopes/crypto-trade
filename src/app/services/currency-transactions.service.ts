import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyTransactionsService {

  // private userCurrencies: Array<UserCurrency>;

  constructor(private userService: UserService) { }

  getUserCurrencies() {
    return this.userService.getUserCurrencies()
      .map((res) => res.json());
  }

  buyCurrency(currencyBuyPrice: Number) {

  }

  sellCurrency(currencySellPrice: Number) {

  }

}
