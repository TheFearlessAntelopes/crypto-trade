import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyListingComponent } from './currency-listing.component';

describe('CurrencyListingComponent', () => {
  let component: CurrencyListingComponent;
  let fixture: ComponentFixture<CurrencyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
