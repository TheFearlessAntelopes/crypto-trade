import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from './services/user-auth.service';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
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
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    HomeModule,
    UsersModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ])
  ],
  providers: [
    CookieService,
    HttpRequesterService,
    HttpRequesterOptionsFactoryService,
    UserAuthService,
    CurrencyProviderService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
