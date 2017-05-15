import { NreciqueryResponse, Recipe } from './nreciquery-response';
import { RecipeRequest } from './recipe-query';

export class RRHelper {

  public static buildRequest(req: NreciRequest): RecipeRequest {
    return {
      'ingredients': req.getIngredients(),
      'ingredientsMatchType': req.getIMatchType(),
      'seasonings': req.getSeasonings(),
      'seasoningsMatchType': req.getSMatchType()
    };
  }

  public static parse(data: any): NreciqueryResponse {
    const result: NreciqueryResponse = {
      total_results: data.count,
      total_pages: data.total_pages,
      prev: data.links.previous,
      next: data.links.next,
      results: this.parseRecipes(data.results)
    };
    return result;
  }

  private static parseRecipes(results: any): Recipe[] {
    return results.map((result) => {
      return {
        name: result.name,
        description: result.description,
        type: result.type,
        directions: result.directions,
        ingredients_details: result.ingredients_details,
        ingredients: result.ingredients.map((obj) => { return obj.name; }),
        seasonigs: result.seasonings.map((obj) => { return obj.name; })
      };
    });
  }
}

export class NreciRequest {
  private ingredients: string[];
  private seasonings: string[];
  private imatchType: string;
  private smatchType: string;

  constructor(ingredients: string, seasonings: string) {
    this.ingredients = this.toArray(ingredients);
    this.seasonings = this.toArray(seasonings);
  }

  setIMatchType(type: string) {
    this.imatchType = type;
    return this;
  }

  setSMatchType(type: string) {
    this.smatchType = type;
    return this;
  }

  getIngredients(): string[] {
    return this.ingredients;
  }

  getSeasonings(): string[] {
    return this.seasonings;
  }

  getIMatchType(): string {
    return this.imatchType;
  }

  getSMatchType(): string {
    return this.smatchType;
  }

  private toArray(value: string): string[] {
    if (value) {
      return value.split(/[ ,]+/);
    }
    return [];
  }
}
