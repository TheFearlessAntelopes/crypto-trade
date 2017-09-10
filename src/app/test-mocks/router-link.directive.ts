import { Input, HostListener } from '@angular/core';
/* tslint:disable rule: directive-selector */

import { Directive } from '@angular/core';

@Directive({
  selector: '[routerLink]',
})
export class RouterLinkDirective {
  
  // tslint:disable-next-line:no-input-rename
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click') onClick() {
    this.navigatedTo = this.linkParams;
  }
}
