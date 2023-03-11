import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sałatka śledziowa z ziemniakami',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'łatwy',
      120,
      8,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/salatka-sledziowa-z-miemniakami-i-zielonym-groszkiem474141.jpg'
    ),
    new Recipe(
      'Wykwintna sałatka śledziowa z buraczkami',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'średni',
      45,
      3,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/wykwintna-salatka-sledziowa-z-buraczkami.jpg'
    ),
    new Recipe(
      'Sałatka śledziowa z ziemniakami - 2',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'trudny',
      110,
      4,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/salatka-sledziowa-z-miemniakami-i-zielonym-groszkiem474141.jpg'
    ),
    new Recipe(
      'Wykwintna sałatka śledziowa z buraczkami - 2',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'średni',
      45,
      3,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/wykwintna-salatka-sledziowa-z-buraczkami.jpg'
    ),
    new Recipe(
      'Sałatka śledziowa z ziemniakami - 3',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'łatwy',
      30,
      4,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/salatka-sledziowa-z-miemniakami-i-zielonym-groszkiem474141.jpg'
    ),
    new Recipe(
      'Wykwintna sałatka śledziowa z buraczkami - 3',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'średni',
      45,
      3,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/wykwintna-salatka-sledziowa-z-buraczkami.jpg'
    ),
    new Recipe(
      'Sałatka śledziowa z ziemniakami - 444444444',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'łatwy',
      30,
      4,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/salatka-sledziowa-z-miemniakami-i-zielonym-groszkiem474141.jpg'
    ),
    new Recipe(
      'Wykwintna sałatka śledziowa z buraczkami - 444444',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'średni',
      45,
      3,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/wykwintna-salatka-sledziowa-z-buraczkami.jpg'
    ),
    new Recipe(
      'Sałatka śledziowa z ziemniakami - 5',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'łatwy',
      30,
      4,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/salatka-sledziowa-z-miemniakami-i-zielonym-groszkiem474141.jpg'
    ),
    new Recipe(
      'Wykwintna sałatka śledziowa z buraczkami - 5',
      ['Krok 1', 'Krok 2', 'Krok 3', 'Krok 4'],
      [
        new Ingredient('Ogórek', 2),
        new Ingredient('Ziemniak', 3),
        new Ingredient('Pora ', 4),
      ],
      'średni',
      45,
      3,
      'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/wykwintna-salatka-sledziowa-z-buraczkami.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
