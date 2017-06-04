import { Injectable } from '@angular/core';
import { Recipe, NreciqueryResponse } from '../dataobjects/response-objects';
import { Parser } from '../utils/parser';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class RecipesService {

  private originParams: URLSearchParams;

  constructor(private http: Http) {}

  setURLSearchParams(params: URLSearchParams) {
    this.originParams = params;
  }

  getRecipes(): Observable<NreciqueryResponse> {
    return this.http.get(environment.api, {
      search: this.originParams
    }).map( (res) => res.json() )
      .map( (res) => Parser.parse(res) );
  }

  getNextPrevRecipes(link: string): Observable<NreciqueryResponse> {
    return this.http.get(link).map( (res) => res.json() )
                              .map( (res) => Parser.parse(res));
  }

  getPage(pageNum: number): Observable<NreciqueryResponse> {
    const params = this.originParams;
    console.log(this.originParams);
    // params.set('page', '' + pageNum);
    return this.http.get(environment.api, {
      search: params
    }).map( (res) => res.json() )
      .map( (res) => Parser.parse(res) );
  }

}
