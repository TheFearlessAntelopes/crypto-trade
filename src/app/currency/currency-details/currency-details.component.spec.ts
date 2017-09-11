import { By, BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CurrencyDetailsComponent } from './currency-details.component';

describe('CurrencyDetailsComponent', () => {
  // let component: CurrencyDetailsComponent;
  // let fixture: ComponentFixture<CurrencyDetailsComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          CurrencyDetailsComponent,
        ],
        imports: [
        ],
        providers: [
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(CurrencyDetailsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();

    
  });

  it('pay price shoudl be formatted with 5 digits precision', () => {
    // const element = fixture.debugElement.query(By.css('.ransaion-container> span:nth-child(1)'));
    // const el: HTMLElement = element.nativeElement;

    // expect(el.innerHTML).toEqual('Pay: $0.00000');
  });
});
