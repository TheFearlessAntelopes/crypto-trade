import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastrCustomOptions } from './models/toastr-custom-options';
import { ToastOptions } from 'ng2-toastr';
import { ToastrService } from './services/toastr.service';
import { FormValidationService } from './services/form-validation.service';
import { ActiveHoverDirective } from './directives/active-hover.directive';
import { CurrencyModule } from './currency/currency.module';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from './services/user-auth.service';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpModule, BrowserXhr } from '@angular/http';
import { HttpRequesterOptionsFactoryService } from './services/http-requester-options-factory.service';
import { HttpRequesterService } from './services/http-requester.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControlDirective, FormGroupDirective } from '@angular/forms';
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
    ActiveHoverDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AboutModule,
    UsersModule,
    CurrencyModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '**', redirectTo: '/' },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]),
    ToastModule.forRoot(),
  ],
  providers: [
    CookieService,
    HttpRequesterService,
    HttpRequesterOptionsFactoryService,
    UserAuthService,
    CurrencyProviderService,
    UserService,
    FormControlDirective,
    FormGroupDirective,
    FormValidationService,
    ToastrService,
    { provide: ToastOptions, useClass: ToastrCustomOptions },
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
