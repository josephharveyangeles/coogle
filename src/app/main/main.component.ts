import { Component, ViewChild } from '@angular/core';
import { InputComponent } from './input/input.component';
import { Observable } from 'rxjs/Observable';

import { RecipeRequest } from './recipe-query';
import { NreciqueryResponse } from './nreciquery-response';
import { RecipeService } from './recipe.service';
import { RRHelper, NreciRequest } from './request-response-helper';

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

  constructor(private recipeService: RecipeService) { }

  triggerSearch(): void {
    const recipeRequest = this.createRecipeRequest();
    this.recipeService.getRecipes(RRHelper.buildRequest(recipeRequest))
                      .subscribe(
                          (data) => {
                            this.hasResult = true;
                            this.result = RRHelper.parse(data);
                            console.log(this.result);
                            this.clearFields();
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
