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
    const recipeRequest = this.createRecipeRequest();
    this.recipeService.getRecipes(RRHelper.buildRequest(recipeRequest))
                      .subscribe(
                          (data) => {
                            this.hasResult = true;
                            this.result = RRHelper.parse(data);
                            this.resultsService.setResult(this.result);
                            console.log(this.result);
                            this.clearFields();
                            this.router.navigate(['results']);
                      });
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
