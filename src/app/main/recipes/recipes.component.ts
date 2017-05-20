import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RecipesService } from './recipes.service';
import { Recipe, NreciqueryResponse } from '../dataobjects/response-objects';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private recipes: Recipe[];
  private totalRecipes: number;
  private totalPages: number;
  private nextLink: string;
  private prevLink: string;
  private currentPage: number;

  private resultsArrived = false;

  constructor(private service: RecipesService) { }

  ngOnInit() {
    this.getFirstResults();
  }

  private getFirstResults() {
    this.fetch( () => this.service.getRecipes(), 1);
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
      return;
    }

    if (toPage === this.totalPages) {
      this.fetch(() => this.service.getPage(toPage), toPage);
      return;
    }

    this.getNextOrPreviousResults(toPage);
  }

  private fetch( serviceFunction: Function, page: number ) {
    serviceFunction().subscribe(
      (res: NreciqueryResponse) => this.initialize(res, page)
    );
  }

  private getNextOrPreviousResults(toPage: number) {
    let link = this.nextLink;
    if (toPage < this.currentPage) {
      link = this.prevLink;
    }
    this.fetch(() => this.service.getNextPrevRecipes(link), toPage);
  }
}
