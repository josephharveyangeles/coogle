import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';
import { DISH_TYPE_CLASSES_MAP } from '../utils/constants';

@Directive({
  selector: '[appDishTypeStyle]'
})
export class DishTypeStyleDirective implements OnInit {

  @Input() appDishTypeStyle: string;

  constructor(public el: ElementRef, public renderer: Renderer) {
  }

  ngOnInit(): void {
    this.renderer.setElementClass(this.el.nativeElement,
                             this.getClassSytyle(),
                             true);
  }

  private getClassSytyle() {
    return DISH_TYPE_CLASSES_MAP[this.appDishTypeStyle];
  }

}
