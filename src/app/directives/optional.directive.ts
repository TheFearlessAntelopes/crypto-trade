import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOptional]'
})
export class OptionalDirective {

  constructor(private element: ElementRef) { }

  @HostListener('change') onchange() {
    const inputValue: string = this.element.nativeElement.value;

    if (!inputValue || inputValue.length === 0) {
      this.element.nativeElement.value = 'Not linked';
    }
  }
}
