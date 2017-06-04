import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Recipe } from '../../dataobjects/response-objects';
import { DISH_TYPE_CLASSES_MAP } from '../../utils/constants';

@Component({
  selector: 'app-recipe-body',
  templateUrl: './recipe-body.component.html',
  styleUrls: ['./recipe-body.component.css']
})
export class RecipeBodyComponent implements OnChanges {

  @ViewChild('dialog')
  public dialog: ModalDirective;

  @Input('recipe')
  private recipe: Recipe;

  dishtypeclass: string;

  public show(): void {
    this.dialog.show();
  }

  ngOnChanges(changes: {[propname: string]: SimpleChange}) {
    const recipe = changes['recipe'].currentValue;
    if (recipe) {
      this.recipe = recipe;
      this.dishtypeclass = DISH_TYPE_CLASSES_MAP[recipe.type];
    }
  }

}
