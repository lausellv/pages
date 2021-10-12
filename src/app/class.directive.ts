import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // @Input() backgroundColor: string;

  constructor(private element: ElementRef) {
    console.log('Class directive used');

      this.element.nativeElement.style.backgroundColor = 'orange';
    
  }
}
