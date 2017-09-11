import { CurrencyProcessorMockService } from './../../test-mocks/currency-processor-mock.service';
import { CurrencyProviderMockService } from './../../test-mocks/currency-provider-mock.service';
import { UserAuthServiceMockService } from './../../test-mocks/user-auth-service-mock.service';
import { UserAuthService } from './../../services/user-auth.service';
import { UserService } from './../../services/user.service';
import { HttpRequesterOptionsFactoryService } from './../../services/http-requester-options-factory.service';
import { HttpRequesterServiceMockService } from './../../test-mocks/http-requester-service-mock.service';
import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';
import { HttpRequesterService } from './../../services/http-requester.service';
import { CurrencyProviderService } from './../../services/currency-provider.service';
import { CurrencyTransactionsService } from './../../services/currency-transactions.service';
import { CurrencyDetailsFactoryService } from './../../services/currency-details-factory.service';
import { CurrencyProcessorService } from './../../services/currency-processor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CurrencyChartComponent } from './../currency-chart/currency-chart.component';
import { ChartModule } from 'angular2-highcharts';
import { FormsModule } from '@angular/forms';
import { CurrencyDataFormatterPipe } from './../../pipes/currency-data-formatter.pipe';
import { PriceCalculatorPipe } from './../../pipes/price-calculator.pipe';
import { ImageUrlFormatterPipe } from './../../pipes/image-url-formatter.pipe';
import { By, BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDetailsComponent } from './currency-details.component';

describe('CurrencyDetailsComponent', () => {
  let component: CurrencyDetailsComponent;
  let fixture: ComponentFixture<CurrencyDetailsComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          CurrencyDetailsComponent,
          ImageUrlFormatterPipe,
          CurrencyDataFormatterPipe,
          PriceCalculatorPipe,
          CurrencyChartComponent
        ],
        imports: [
          HttpModule,
          BrowserModule,
          FormsModule,
          ChartModule,
          RouterTestingModule,
        ],
        providers: [
          { provide: HttpRequesterService, useClass: HttpRequesterServiceMockService },
          HttpRequesterOptionsFactoryService,
          UserService,
          { provide: UserAuthService, useClass: UserAuthServiceMockService },
          { provide: CurrencyProviderService, useClass: CurrencyProviderMockService },
          { provide: CurrencyProcessorService, useClass: CurrencyProcessorMockService },
          CurrencyDetailsFactoryService,
          CurrencyTransactionsService
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('pay price shoudl be formatted with 5 digits precision', () => {
  //   const element = fixture.debugElement.query(By.css('.ransaion-container> span:nth-child(1)'));
  //   const el: HTMLElement = element.nativeElement;

  //   expect(el.innerHTML).toEqual('Pay: $0.00000');
  // });
});
