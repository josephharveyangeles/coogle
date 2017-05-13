import { Component, OnInit, ViewChild } from '@angular/core';
import { InputComponent } from './input/input.component';

import { RecipeRequest } from './recipe-query';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('ingredientsfield')
  private ingredientsField: InputComponent;

  @ViewChild('seasoningsfield')
  private seasoningsField: InputComponent;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  triggerSearch(): void {
    const ingredients = this.toArray(this.ingredientsField.getInputValue());
    const seasonings = this.toArray(this.seasoningsField.getInputValue());
    const iMatchType = this.ingredientsField.getMatchType();
    const sMatchType = this.seasoningsField.getMatchType();

    this.recipeService.getRecipes({
      'ingredients': ingredients,
      'ingredientsMatchType': iMatchType,
      'seasonings': seasonings,
      'seasoningsMatchType': sMatchType
    });

    this.ingredientsField.clear();
    this.seasoningsField.clear();
  }

  private toArray(value: string): string[] {
    if (value) {
      return value.split(/[ ,]+/);
    }
    return [];
  }

}
