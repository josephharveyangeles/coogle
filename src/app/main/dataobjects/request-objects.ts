export interface RecipeRequest {
  ingredients: string[];
  ingredientsMatchType: string;
  seasonings?: string[];
  seasoningsMatchType?: string;
}

export class RecipeRequestImpl implements RecipeRequest {
  ingredients: string[];
  ingredientsMatchType: string;
  seasonings?: string[];
  seasoningsMatchType?: string;

  constructor(ingredients: string, seasonings: string) {
    this.ingredients = this.toArray(ingredients);
    this.seasonings = this.toArray(seasonings);
  }

  setIMatchType(type: string) {
    this.ingredientsMatchType = type;
    return this;
  }

  setSMatchType(type: string) {
    this.seasoningsMatchType = type;
    return this;
  }

  getIngredients(): string[] {
    return this.ingredients;
  }

  getSeasonings(): string[] {
    return this.seasonings;
  }

  getIMatchType(): string {
    return this.ingredientsMatchType;
  }

  getSMatchType(): string {
    return this.seasoningsMatchType;
  }

  private toArray(value: string): string[] {
    if (value) {
      return value.split(/[ ,]+/);
    }
    return [];
  }
}
