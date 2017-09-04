import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrencyListingComponent } from './currency-listing/currency-listing.component';
import { CurrencyComponent } from './currency.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'currency/all', component: CurrencyListingComponent },
  { path: 'currency/:name', component: CurrencyDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class CurrencyRouterModule { }
