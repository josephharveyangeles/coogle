import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from './input/input.component';
import { Observable } from 'rxjs/Observable';

import { RecipeRequest, RecipeRequestImpl } from './dataobjects/request-objects';
import { NreciqueryResponse } from './dataobjects/response-objects';

import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @ViewChild('ingredientsfield')
  private ingredientsField: InputComponent;

  @ViewChild('seasoningsfield')
  private seasoningsField: InputComponent;

  constructor(
    private recipesService: RecipesService,
    private router: Router
    ) {}

  triggerSearch(): void {
    const recipeRequest = this.createRecipeRequest();
    this.router.navigate(['recipes', recipeRequest]);
  }

  private createRecipeRequest(): RecipeRequest {
    return new RecipeRequestImpl(
                          this.ingredientsField.getInputValue(),
                          this.seasoningsField.getInputValue(),
                        )
                        .setIMatchType(this.ingredientsField.getMatchType())
                        .setSMatchType(this.seasoningsField.getMatchType());
  }

}
