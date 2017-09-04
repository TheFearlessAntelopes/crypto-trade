import { CurrencyDataFormatterPipe } from './../pipes/currency-data-formatter.pipe';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts/highstock';
import { CurrencyComponent } from './currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrencyListingComponent } from './currency-listing/currency-listing.component';
import { CurrencyRouterModule } from './currency-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdCardModule, MdTableModule } from '@angular/material';
import { ImageUrlFormatterPipe } from '../pipes/image-url-formatter.pipe';
export function highchartsFactory() {
  return highcharts;
}
@NgModule({
  imports: [
    CommonModule,
    CurrencyRouterModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdTableModule,
    MdInputModule,
    ChartModule,
    NgxDatatableModule
  ],
  declarations: [
    CurrencyComponent,
    CurrencyListingComponent,
    CurrencyDetailsComponent,
    ImageUrlFormatterPipe,
    CurrencyDataFormatterPipe,
    CurrencyChartComponent
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }]
})
export class CurrencyModule { }
