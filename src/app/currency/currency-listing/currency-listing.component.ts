import { CurrencyProviderService } from './../../services/currency-provider.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-currency-listing',
  templateUrl: './currency-listing.component.html',
  styleUrls: ['./currency-listing.component.css']
})
export class CurrencyListingComponent implements OnInit {

  loadedItems: Array<{}>;

  constructor(private currencyProviderService: CurrencyProviderService) { }

  ngOnInit() {
    this.currencyProviderService.getAllCoinInformation()
      .map((res) => res.json())
      .map((res) => Object.values(res.Data))
      .subscribe((response) => {
        response = response.splice(0, 30);

        this.loadedItems = response;
      });
  }
}
