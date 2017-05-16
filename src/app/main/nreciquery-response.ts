export interface NreciqueryResponse {
  total_results: number;
  total_pages: number;
  prev: string;
  next: string;
  results: any[];
}

export interface Recipe {
  name: string;
  description: string;
  type: string;
  ingredients: string[];
  seasonings: string[];
  ingredients_details: string;
  directions: string;
  imageUrl?: string;
}
