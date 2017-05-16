import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';

import { Recipe } from '../nreciquery-response';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private recipes: Recipe[];
  private totalRecipes: number;
  private totalPages: number;
  private nextLink: string;
  private prevLink: string;
  private currentPage: number;

  constructor(private service: ResultsService) { }

  ngOnInit() {
    this.recipes = this.service.getRecipes();
    this.totalRecipes = this.service.getTotalResults();
    this.totalPages = this.service.getTotalPages();
    this.prevLink = this.service.getPreviousLink();
    this.nextLink = this.service.getNextLink();
    this.currentPage = 1;
  }

  pageChanged(obj: any) {
    const toPage = obj.page;
    if (toPage === 1) {
      // TODO: verify if currentPage updates after pageChanged() event.
      console.log('First');
      return;
    }

    if (toPage === this.totalPages) {
      console.log('Last');
      return;
    }

    if (toPage > this.currentPage) {
      console.log('nextLink: ' + this.nextLink);
    }
    console.log('prevLink: ' + this.prevLink);
  }

}
