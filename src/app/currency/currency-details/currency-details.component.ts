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
  // Something doesnt't work, for some reason the two http request are not async and something returns undefined
  // Find a way to make http requests async
  // Why does the template display items only with the ngFor?
  // The items are not yet loaded if ngFor is not used? why?
  currencyId: number;
  currencyDetails: Array<CurrencyDetails>;

  constructor(private detailsRoute: ActivatedRoute,
    private currencyDetailsProcessor: CurrencyProcessorService) { }

  ngOnInit() {
    this.detailsRoute.params.subscribe((params) => {
      this.currencyId = params.id;
      this.loadCurrencyDetails();
    });
  }

  private loadCurrencyDetails() {
    const details =
      this.currencyDetailsProcessor.getFullCurrencyDetails(this.currencyId);

    this.currencyDetails = [details];
  }
}
