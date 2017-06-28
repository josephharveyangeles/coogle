import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { RecipesService } from './recipes.service';
import { Recipe, NreciqueryResponse } from '../dataobjects/response-objects';
import { RecipeBodyComponent } from './recipe-body/recipe-body.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @ViewChild('recipeDialog')
  recipeDialog: RecipeBodyComponent;

  recipes: Recipe[];
  totalRecipes: number;
  totalPages: number;
  nextLink: string;
  prevLink: string;
  currentPage: number;

  selectedRecipe: Recipe;
  resultsArrived = false;
  errorOccured = false;
  params: Params;

  constructor(
      private service: RecipesService,
      private route: ActivatedRoute
  ) { this.params = route.params; }

  ngOnInit() {
    this.getFirstResults();
  }

  private getFirstResults() {
    this.params.switchMap( (params: Params) =>
                              this.service.getRecipes(params))
                         .subscribe(
                           (res: NreciqueryResponse) =>
                              this.initialize(res, 1),
                           (error) => this.errorOccured = true
                         );
  }

  private initialize(response: NreciqueryResponse, page: number) {
    this.recipes = response.results;
    this.totalRecipes = response.total_results;
    this.totalPages = response.total_pages;
    this.prevLink = response.prev;
    this.nextLink = response.next;
    this.currentPage = page;
    this.resultsArrived = true;
  }

  pageChanged(obj: any) {
    const toPage = obj.page;
    this.resultsArrived = false;
    if (toPage === 1) {
      this.getFirstResults();
    } else {
      this.getPageResults(toPage);
    }
  }

  private getPageResults(toPage: number): void {
    if (toPage === this.totalPages) {
      this.fetch(() => this.service.getPage(toPage), toPage);
      return;
    }
    this.getNextOrPreviousResults(toPage);
  }

  private getNextOrPreviousResults(toPage: number) {
    let link = this.nextLink;
    if (toPage < this.currentPage) {
      link = this.prevLink;
    }
    this.fetch(() => this.service.getNextPrevRecipes(link), toPage);
  }

  private fetch( serviceFunction: Function, page: number ) {
    serviceFunction().subscribe(
            (res: NreciqueryResponse) => this.initialize(res, page),
            (error) => this.errorOccured = true
          );
  }

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.recipeDialog.show();
  }
}
