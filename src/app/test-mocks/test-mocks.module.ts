import { RouterLinkDirective } from './router-link.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RouterLinkDirective
  ],
  exports: [
    RouterLinkDirective
  ]
})
export class TestMocksModule { }
