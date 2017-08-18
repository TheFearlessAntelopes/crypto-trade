import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currencyId: number;

  constructor(private detailsRoute: ActivatedRoute) {
    this.detailsRoute.params.subscribe((params) => {
      this.currencyId = params.id;
    });
  }

  ngOnInit() {
  }

}
