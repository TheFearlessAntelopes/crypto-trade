import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public team = [
    // tslint:disable-next-line:max-line-length
    { name: 'Georgi', ImageUrl: 'https://joashpereira.com/templates/material_one_pager/img/avatar1.png', title: 'Master of \"if\" statements' },
    { name: 'Daniel', ImageUrl: 'https://joashpereira.com/templates/material_one_pager/img/avatar3.png', title: 'Knows what is a variable' },
    // tslint:disable-next-line:max-line-length
    { name: 'Dimitar', ImageUrl: 'https://joashpereira.com/templates/material_one_pager/img/avatar4.png', title: 'Just learned \"Hello worwd\"' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
