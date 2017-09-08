import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { CurrencyTransactionsService } from './../../services/currency-transactions.service';
import { CurrencyDetails } from './../../models/currency-details';
import { CurrencyProcessorService } from './../../services/currency-processor.service';
import { CurrencyProviderService } from './../../services/currency-provider.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {
  private loggedUser: User;

  currencyId: number;
  currencyDetails: CurrencyDetails;
  currencyData: number[][];
  loading = true;
  affordableBuy: boolean;
  affordableSell: boolean;
  buyQuantity: number;
  sellQuantity: number;

  constructor(private detailsRoute: ActivatedRoute,
    private currencyDetailsProcessor: CurrencyProcessorService,
    private currencyProviderService: CurrencyProviderService,
    private currencyTransactionsService: CurrencyTransactionsService,
    private userService: UserService) { }

  ngOnInit() {
    this.detailsRoute.params.subscribe((params) => {
      this.currencyId = params.id;
      this.loadCurrencyDetails();
      this.updateUser();
    });
  }

  private updateUser() {
    this.userService.getUserDetails()
      .map((res) => res.json())
      .subscribe((response) => {
        this.loggedUser = response.user;
      });
  }

  isBuyAffordable(value: number) {
    this.affordableBuy = this.loggedUser.balance >=
      value * this.currencyDetails.priceConversions['USD'];
  }

  isSellAfordable(value: number) {
    this.affordableSell = this.loggedUser.currencies[this.currencyDetails.symbol] >=
      value;
  }

  getUserBalance() {
    return this.loggedUser.balance;
  }

  private loadCurrencyDetails() {
    this.currencyDetailsProcessor.getFullCurrencyDetails(this.currencyId)
      .subscribe((result) => {
        this.currencyDetails = result;
        this.currencyProviderService.getCoinIOHLCInformation(this.currencyDetails.symbol)
          .map((res) => res.json())
          .map((res) => Object.values(res.result.Data))
          .map((res) => res.map(x => [x.time * 1000, x.close]))
          .map((res) => res.filter(x => x[1] > 0))
          .subscribe((response) => {
            this.loading = false;
            this.currencyData = (response);
          });
      });
  }

  onBuy() {
    this.currencyTransactionsService.buyCurrency(this.currencyDetails.symbol,
      this.currencyDetails.priceConversions['USD'], this.buyQuantity)
      .subscribe((r) => {
        this.updateUser();
        this.loggedUser.balance -= this.currencyDetails.priceConversions['USD'] * this.buyQuantity;
        this.buyQuantity = null;
        this.affordableBuy = false;
      });
  }

  onSell() {
    this.currencyTransactionsService.sellCurrency(this.currencyDetails.symbol,
      this.currencyDetails.priceConversions['USD'], this.sellQuantity)
      .subscribe((r) => {
        this.updateUser();
        this.loggedUser.balance += this.currencyDetails.priceConversions['USD'] * this.sellQuantity;
        this.sellQuantity = null;
        this.affordableSell = false;
      });
  }
}
