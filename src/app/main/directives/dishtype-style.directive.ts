import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDishTypeStyle]'
})
export class DishTypeStyleDirective implements OnInit {

  private static classes = {
    'MD' : 'label-primary',
    'SD': 'label-success',
    'SN': 'label-info',
    'ST': 'label-warning',
    'DS': 'label-danger'
  };

  @Input() appDishTypeStyle: string;

  constructor(public el: ElementRef, public renderer: Renderer) {
  }

  ngOnInit(): void {
    this.renderer.setElementClass(this.el.nativeElement,
                             this.getClassSytyle(),
                             true);
  }

  private getClassSytyle() {
    return DishTypeStyleDirective.classes[this.appDishTypeStyle];
  }

}
