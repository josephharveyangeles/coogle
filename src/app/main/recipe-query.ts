export interface RecipeRequest {
  ingredients: string[];
  ingredientsMatchType: string;
  seasonings?: string[];
  seasoningsMatchType?: string;
}
