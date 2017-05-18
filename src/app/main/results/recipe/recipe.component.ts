import { Component, Input } from '@angular/core';
import { Recipe } from '../../dataobjects/response-objects';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  @Input()
  recipe: Recipe;

}
