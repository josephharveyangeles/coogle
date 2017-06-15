export interface RecipeRequest {
  ingredients: string;
  ingredientsMatchType: string;
  seasonings?: string;
  seasoningsMatchType?: string;
}

export class RecipeRequestImpl implements RecipeRequest {
  ingredients: string;
  ingredientsMatchType: string;
  seasonings?: string;
  seasoningsMatchType?: string;

  constructor(ingredients: string, seasonings: string) {
    this.ingredients = this.normalize(ingredients);
    this.seasonings = this.normalize(seasonings);
  }

  setIMatchType(type: string) {
    this.ingredientsMatchType = type;
    return this;
  }

  setSMatchType(type: string) {
    this.seasoningsMatchType = type;
    return this;
  }

  getIngredients(): string {
    return this.ingredients;
  }

  getSeasonings(): string {
    return this.seasonings;
  }

  getIMatchType(): string {
    return this.ingredientsMatchType;
  }

  getSMatchType(): string {
    return this.seasoningsMatchType;
  }

  private normalize(value: string): string {
    if (value) {
      return value.split(/[ ,]+/).map(this.totTitleCase).join('|');
    }
    return '';
  }

  private totTitleCase(str: string) {
    return str.replace(/\w\S*/g, (txt) =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
}
