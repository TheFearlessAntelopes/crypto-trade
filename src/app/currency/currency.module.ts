import { CurrencyTransactionsService } from './../services/currency-transactions.service';
import { SharedModule } from './../shared/shared.module';
import { CurrencyDataFormatterPipe } from './../pipes/currency-data-formatter.pipe';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts/highstock';
import { CurrencyDetailsFactoryService } from './../services/currency-details-factory.service';
import { CurrencyProcessorService } from './../services/currency-processor.service';
import { CurrencyComponent } from './currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrencyListingComponent } from './currency-listing/currency-listing.component';
import { CurrencyRouterModule } from './currency-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageUrlFormatterPipe } from '../pipes/image-url-formatter.pipe';
export function highchartsFactory() {
  return highcharts;
}
@NgModule({
  imports: [
    SharedModule,
    CurrencyRouterModule,
    BrowserAnimationsModule,
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
  },
  CurrencyProcessorService,
  CurrencyDetailsFactoryService,
  CurrencyTransactionsService
  ]
})
export class CurrencyModule { }
