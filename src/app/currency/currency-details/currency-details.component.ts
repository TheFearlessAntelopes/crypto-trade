import { CurrencyTransactionsService } from './../../services/currency-transactions.service';
import { CurrencyDetails } from './../../models/currency-details';
import { CurrencyProcessorService } from './../../services/currency-processor.service';
import { CurrencyProviderService } from './../../services/currency-provider.service';
import { Component, OnInit, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit, OnChanges {
  currencyId: number;
  currencyDetails: CurrencyDetails;
  public currencyData: number[][];
  public loading = true;

  constructor(private detailsRoute: ActivatedRoute,
    private currencyDetailsProcessor: CurrencyProcessorService,
    private currencyProviderService: CurrencyProviderService,
    private currencyTransactionsService: CurrencyTransactionsService) { }

  ngOnInit() {
    this.detailsRoute.params.subscribe((params) => {
      this.currencyId = params.id;
      this.loadCurrencyDetails();
    });

  }
  ngOnChanges(changes: SimpleChanges): void {
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

            this.currencyTransactionsService.buyCurrency(this.currencyDetails.symbol,
              this.currencyDetails.priceConversions['USD'])
              .subscribe((r) => {
                console.log(r);
              });
          });
      });
  }
}
