import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from './input/input.component';
import { Observable } from 'rxjs/Observable';

import { RecipeRequest } from './recipe-query';
import { NreciqueryResponse } from './nreciquery-response';
import { RRHelper, NreciRequest } from './request-response-helper';

import { RecipeService } from './recipe.service';
import { ResultsService } from './results/results.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  private hasResult = false;
  private result: NreciqueryResponse;

  @ViewChild('ingredientsfield')
  private ingredientsField: InputComponent;

  @ViewChild('seasoningsfield')
  private seasoningsField: InputComponent;

  constructor(
    private recipeService: RecipeService,
    private resultsService: ResultsService,
    private router: Router
  ) { }

  triggerSearch(): void {
    const recipeRequest = RRHelper.buildRequest(this.createRecipeRequest());
    const searchParams = this.recipeService.buildRequestParams(recipeRequest);
    this.resultsService.setURLSearchParams(searchParams);
    this.router.navigate(['results']);
    this.clearFields();
  }

  private createRecipeRequest(): NreciRequest {
    return new NreciRequest(
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
