import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() brightness = '70%';

  @HostListener('mouseover')
  darkenOn(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  darkenOff(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'filter');
  }
}
