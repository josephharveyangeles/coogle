import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';

import { Recipe, NreciqueryResponse } from '../dataobjects/response-objects';

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
    this.getFirstPage();
  }

  private getFirstPage(): void {
    this.service.getRecipes()
                .subscribe(
                    (res: NreciqueryResponse) => this.initialize(res, 1)
                );
  }

  private initialize(response: NreciqueryResponse, page: number) {
    this.recipes = response.results;
    this.totalRecipes = response.total_results;
    this.totalPages = response.total_pages;
    this.prevLink = response.prev;
    this.nextLink = response.next;
    this.currentPage = page;
  }

  // TODO: just pass the service.function on fetch*()
  // TODO: fix service names
  // TODO: add animations on item hover like on mindspace tutorial
  pageChanged(obj: any) {
    const toPage = obj.page;
    if (toPage === 1) {
      this.getFirstPage();
      return;
    }

    if (toPage === this.totalPages) {
      console.log('Last');
      this.fetchResultsOnPage(toPage);
      return;
    }

    let link = this.nextLink;
    if (toPage < this.currentPage) {
      link = this.prevLink;
    }
    this.fetchResults(link, toPage);
  }

  private fetchResults(link: string, page: number) {
    this.service.getNextPrevRecipes(link)
                .subscribe(
                    (res: NreciqueryResponse) => this.initialize(res, page)
                );
  }

  private fetchResultsOnPage(page: number) {
    this.service.getPage(page)
                .subscribe(
                    (res: NreciqueryResponse) => this.initialize(res, page)
                );
  }

}
