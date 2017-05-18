import { Injectable } from '@angular/core';
import { Recipe, NreciqueryResponse } from '../nreciquery-response';
import { RRHelper } from '../request-response-helper';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class ResultsService {

  private originParams: URLSearchParams;

  constructor(private http: Http) {}

  setURLSearchParams(params: URLSearchParams) {
    this.originParams = params;
  }

  getRecipes(): Observable<NreciqueryResponse> {
    return this.http.get(environment.api, {
      search: this.originParams
    }).map( (res) => res.json() )
      .map( (res) => RRHelper.parse(res) );
  }

  getNextPrevRecipes(link: string): Observable<NreciqueryResponse> {
    return this.http.get(link).map( (res) => res.json() )
                              .map( (res) => RRHelper.parse(res));
  }

  getPage(pageNum: number): Observable<NreciqueryResponse> {
    const params = this.originParams.clone();
    params.set('page', '' + pageNum);
    return this.http.get(environment.api, {
      search: params
    }).map( (res) => res.json() )
      .map( (res) => RRHelper.parse(res) );
  }

}
