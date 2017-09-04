import { ChartOptions } from './../../models/chart-options-mondel';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.css']
})
export class CurrencyChartComponent implements OnChanges {
  chart: Object;
  options: ChartOptions;
  @Input()
  currencyName: string;
  @Input()
  currancyOHLCData: number[][];
  ngOnChanges() {
    // console.log(this.currancyOHLCData);
    this.options = {
      title: { text: `${this.currencyName} stock price` },
      series: [{
        name: this.currencyName,
        data: this.currancyOHLCData,
        tooltip: {
          valueDecimals: 6
        }
      }]
    };
  }
}
