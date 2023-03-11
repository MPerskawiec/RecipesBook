import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: string;
  public StepDescription: string[];
  public ingredients: Ingredient[];
  public difficulty: string;
  public preparationTime: number;
  public mealPortions: number;
  public imagePath: string;

  constructor(
    name: string,
    StepDescription: string[],
    ingredients: Ingredient[],
    difficulty: string,
    preparationTime: number,
    mealPortions: number,
    imagePath: string
  ) {
    this.name = name;
    this.StepDescription = StepDescription;
    this.ingredients = ingredients;
    this.difficulty = difficulty;
    this.preparationTime = preparationTime;
    this.mealPortions = mealPortions;
    this.imagePath = imagePath;
  }
}
