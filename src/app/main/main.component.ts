import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from './input/input.component';
import { Observable } from 'rxjs/Observable';

import { RecipeRequest, RecipeRequestImpl } from './dataobjects/request-objects';
import { NreciqueryResponse } from './dataobjects/response-objects';

import { APIParamsBuilder } from './utils/params';
import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  private paramBuilder: APIParamsBuilder;

  @ViewChild('ingredientsfield')
  private ingredientsField: InputComponent;

  @ViewChild('seasoningsfield')
  private seasoningsField: InputComponent;

  constructor(
    private recipesService: RecipesService,
    private router: Router
    ) {
      this.paramBuilder = new APIParamsBuilder();
    }

  triggerSearch(): void {
    const recipeRequest = this.createRecipeRequest();
    const searchParams = this.paramBuilder.build(recipeRequest);
    this.recipesService.setURLSearchParams(searchParams);
    this.router.navigate(['recipes']);
    this.clearFields();
  }

  private createRecipeRequest(): RecipeRequest {
    return new RecipeRequestImpl(
                          this.ingredientsField.getInputValue(),
                          this.seasoningsField.getInputValue(),
                        )
                        .setIMatchType(this.ingredientsField.getMatchType())
                        .setSMatchType(this.seasoningsField.getMatchType());
  }

  private clearFields(): void {
    this.ingredientsField.clear();
    this.seasoningsField.clear();
  }

}
