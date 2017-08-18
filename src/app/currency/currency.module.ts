import { CurrencyComponent } from './currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrencyListingComponent } from './currency-listing/currency-listing.component';
import { CurrencyRouterModule } from './currency-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdCardModule, MdTableModule } from '@angular/material';
import { ImageUrlFormatterPipe } from '../pipes/image-url-formatter.pipe';

@NgModule({
  imports: [
    CommonModule,
    CurrencyRouterModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdTableModule,
    MdInputModule
  ],
  declarations: [
    CurrencyComponent,
    CurrencyListingComponent,
    CurrencyDetailsComponent,
    ImageUrlFormatterPipe,
  ]
})
export class CurrencyModule { }
