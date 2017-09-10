import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuantityValidation]'
})
export class QuantityValidationDirective {

  private maxInputValue: Number = 100;

  constructor(private element: ElementRef) { }

  @HostListener('change') onchange() {
    const inputValue: Number = +this.element.nativeElement.value;

    if (inputValue === 0) {
      this.element.nativeElement.value = '';
    }

    if (inputValue < 0) {
      this.element.nativeElement.value = '0';
    }

    if (inputValue > this.maxInputValue) {
      this.element.nativeElement.value = '100';
    }
  }
}
