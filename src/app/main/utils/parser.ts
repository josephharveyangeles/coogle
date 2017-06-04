import { NreciqueryResponse, Recipe } from '../dataobjects/response-objects';
import { RecipeRequest } from '../dataobjects/request-objects';

export class Parser {

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
        directions: Parser.sanitize(result.directions),
        ingredients_details: Parser.sanitize(result.ingredients_details),
        ingredients: result.ingredients.map( (obj) => obj.name ),
        seasonings: result.seasonings.map( (obj) => obj.name )
      };
    });
  }

  private static sanitize(value: string) {
    return value.split(/[\n#]+/)
                .filter( (val) => val.trim() );
  }
}
