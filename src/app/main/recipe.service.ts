import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RecipeRequest } from './recipe-query';

@Injectable()
export class RecipeService {

  private matchMatrix: any = {
    'all': {
      'all': '',
      'any': '&match_any_level=seasoning'
    },
    'any': {
      'all': '&match_any_level=ingredients',
      'any': '&match_any_level=all'
    }
  };

  constructor(private http: Http) {}

  buildRequestParams(requestOb: RecipeRequest): URLSearchParams {
    const params = new URLSearchParams();
    if (requestOb.ingredients.length === 0) {
      return params;
    }

    this.setIngredientsParam(requestOb, params);
    this.setSeasoningsParam(requestOb, params);
    this.setMatchLevelParam(requestOb, params);
    return params;
  }

  private setIngredientsParam(requestOb: RecipeRequest, params: URLSearchParams) {
    params.set('ingredients', requestOb.ingredients.join('|'));
  }

  private setSeasoningsParam(requestOb: RecipeRequest, params: URLSearchParams) {
    if (this.hasSeasonings(requestOb.seasonings)) {
      params.set('seasonings', requestOb.seasonings.join('|'));
    }
  }

  private setMatchLevelParam(requestOb: RecipeRequest, params: URLSearchParams) {
    const matchLevelParam = 'match_any_level';
    if (!this.hasSeasonings(requestOb.seasonings)) {
      if (requestOb.ingredientsMatchType === 'any') {
        params.set(matchLevelParam, 'ingredient');
      }
      return;
    }

    const iMatchType = requestOb.ingredientsMatchType;
    const sMatchType = requestOb.seasoningsMatchType;
    params.set(matchLevelParam, this.matchMatrix[iMatchType][sMatchType]);
  }

  private hasSeasonings(seasonings: string[] = null): boolean {
    return seasonings !== null && seasonings.length > 0;
  }

}

