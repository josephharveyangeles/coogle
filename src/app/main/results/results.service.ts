import { Injectable } from '@angular/core';
import { Recipe, NreciqueryResponse } from '../nreciquery-response';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ResultsService {

  private response: NreciqueryResponse;
  private recipes: Recipe[];
  private totalPages: number;
  private totalResults: number;
  private nextLink: string;
  private previousLink: string;

  constructor(private http: Http) {}

  setResult(response: NreciqueryResponse) {
    this.response = response;
    this.recipes = response.results;
    this.totalPages = response.total_pages;
    this.totalResults = response.total_results;
    this.nextLink = response.next;
    this.previousLink = response.prev;
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getTotalPages(): number {
    return this.totalPages;
  }

  getTotalResults(): number {
    return this.totalResults;
  }

  getNextLink(): string {
    return this.nextLink;
  }

  getPreviousLink(): string {
    return this.previousLink;
  }

}
