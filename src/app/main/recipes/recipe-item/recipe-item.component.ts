import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../dataobjects/response-objects';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input()
  recipe: Recipe;

  @Output()
  onRecipeSelected = new EventEmitter<Recipe>();

  private recipeSelected(): void {
    this.onRecipeSelected.emit(this.recipe);
  }

}
