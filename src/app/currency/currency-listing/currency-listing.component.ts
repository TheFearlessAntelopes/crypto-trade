import { Router } from '@angular/router';
import { CurrencyProviderService } from './../../services/currency-provider.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-currency-listing',
  templateUrl: './currency-listing.component.html',
  styleUrls: ['./currency-listing.component.css']
})
export class CurrencyListingComponent implements OnInit {
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  rows = [];
  selected = [];
  columns = [];
  loadedItems = [];
  loading = true;

  constructor(private currencyProviderService: CurrencyProviderService, private router: Router) { }


  ngOnInit() {
    this.columns = [{
      cellTemplate: this.editTmpl,
      name: 'Logo'
    },
    { prop: 'Name' },
    { prop: 'CoinName' },
    { prop: 'Algorithm' },
    ];
    this.currencyProviderService.getAllCoinInformation()
      .map((res) => res.json())
      .map((res) => Object.values(res.Data))
      .map((res) => res.filter(x => x.Name.match('.*[A-Z].*')))
      .subscribe((response) => {
        // response = response.splice(0, 30);
        // console.log(response);
        this.loadedItems = response;
        this.rows = this.loadedItems;
        this.loading = false;
      });

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.loadedItems.filter(d => {
      return d.FullName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  onSelect(selected) {
    const currencyUrl = selected.selected[0].Id;
    this.router.navigate(['/currency/' + currencyUrl]);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

}
