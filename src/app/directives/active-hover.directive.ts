import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveHover]'
})
export class ActiveHoverDirective {

  constructor(private element: ElementRef) { }

  private background(value: string) {
    this.element.nativeElement.style.backgroundColor = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.background('#d6d6d6');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background(null);
  }

}
