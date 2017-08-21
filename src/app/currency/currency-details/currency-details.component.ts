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
  currencyId: number;
  currencyDetails: CurrencyDetails;

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
      this.currencyDetailsProcessor.getFullCurrencyDetails(this.currencyId)
        .subscribe((result) => {
          this.currencyDetails = result;
        });
  }
}
