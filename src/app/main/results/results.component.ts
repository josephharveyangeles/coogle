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

  pageChanged(page: number, itemsPerpage: number) {
    console.log(page);
  }

}
