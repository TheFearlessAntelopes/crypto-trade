import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyChartComponent } from './currency-chart.component';

describe('CurrencyChartComponent', () => {
  let component: CurrencyChartComponent;
  let fixture: ComponentFixture<CurrencyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
