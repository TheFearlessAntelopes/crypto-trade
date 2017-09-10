import { CurrencyProviderService } from './../services/currency-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public team = [
    // tslint:disable-next-line:max-line-length
    { name: 'Georgi', ImageUrl: 'https://joashpereira.com/templates/material_one_pager/img/avatar1.png', title: 'Master of \"if\" statements' },
    { name: 'Daniel', ImageUrl: 'https://joashpereira.com/templates/material_one_pager/img/avatar3.png', title: 'Knows what is a variable' },
    // tslint:disable-next-line:max-line-length
    { name: 'Dimitar', ImageUrl: 'https://joashpereira.com/templates/material_one_pager/img/avatar4.png', title: 'Just learned \"Hello worwd\"' }
  ];


  public bestCurrencies = [
    { name: 'BTC', id: 1182, ImageUrl: 'https://www.cryptocompare.com//media/19633/btc.png' },
    { name: 'ETH', id: 7605, ImageUrl: 'https://www.cryptocompare.com/media/20646/eth.png' },
    { name: 'XRP', id: 5031, ImageUrl: 'https://www.cryptocompare.com/media/19972/ripple.png' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
