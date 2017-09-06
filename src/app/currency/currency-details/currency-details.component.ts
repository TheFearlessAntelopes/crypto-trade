<<<<<<< HEAD
=======
import { CurrencyDetails } from './../../models/currency-details';
import { CurrencyProcessorService } from './../../services/currency-processor.service';
>>>>>>> feature/currency-detailing
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
    this.currencyProviderService.getCoinIOHLCInformation(this.currencyShortName)
      .map((res) => res.json())
      .map((res) => Object.values(res.Data))
      .map((res) => res.map(x => [x.time * 1000, x.close]))
      .map((res) => res.filter(x => x[1] > 0))
      .subscribe((response) => {
        // console.log(response);
        this.currencyData = (response);
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
