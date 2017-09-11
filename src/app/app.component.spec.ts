import { RouterTestingModule } from '@angular/router/testing';
import { FormControlDirective, FormGroupDirective } from '@angular/forms';
import { UserService } from './services/user.service';
import { CurrencyProviderService } from './services/currency-provider.service';
import { UserAuthService } from './services/user-auth.service';
import { HttpRequesterOptionsFactoryService } from './services/http-requester-options-factory.service';
import { HttpRequesterService } from './services/http-requester.service';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
      ],
      imports: [
        RouterTestingModule,
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
      ],
    }).compileComponents();
  }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
});
