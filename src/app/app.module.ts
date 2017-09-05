import { SharedModule } from './shared/shared.module';
import { CustExtBrowserXhr } from './extensions/cust-ext-browser-xhr';
import { CurrencyModule } from './currency/currency.module';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from './services/user-auth.service';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpModule, BrowserXhr } from '@angular/http';
import { HttpRequesterOptionsFactoryService } from './services/http-requester-options-factory.service';
import { HttpRequesterService } from './services/http-requester.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyProviderService } from './services/currency-provider.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './users/register/register.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyListingComponent } from './currency/currency-listing/currency-listing.component';
import { CurrencyDetailsComponent } from './currency/currency-details/currency-details.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    HomeModule,
    UsersModule,
    CurrencyModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]),
  ],
  providers: [
    CookieService,
    HttpRequesterService,
    HttpRequesterOptionsFactoryService,
    UserAuthService,
    CurrencyProviderService,
    UserService,
  ],
  // bootstrap: [AppComponent,
  //   { provide: BrowserXhr, useClass: CustExtBrowserXhr }]
  bootstrap: [AppComponent]
})
export class AppModule { }
