import { Ingredient } from './ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Ogórek', 5),
    new Ingredient('mleko', 2),
    new Ingredient('Ziemniaki', 31),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient() {}

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
