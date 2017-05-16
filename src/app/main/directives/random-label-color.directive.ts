import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appRandomLabelColor]'
})
export class RandomLabelColorDirective {

  private static classes = [
    'label-default',
    'label-primary',
    'label-success',
    'label-info',
    'label-warning',
    'label-danger'
  ];

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementClass(el.nativeElement,
                             this.getRandomClass(),
                             true);
  }

  private getRandomClass() {
    const index = Math.floor(Math.random() * RandomLabelColorDirective.classes.length);
    return RandomLabelColorDirective.classes[index];
  }

}
