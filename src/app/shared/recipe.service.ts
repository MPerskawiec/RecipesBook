import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sałatka śledziowa z ziemniakami',
      [
        'Ubić na sztywno 3 białka. Żółtka odłożyć',
        'W misce ugnieść widelcem banany. Dodać odłożone żółtka, 2 całe jajka, olej i mleko. Całość zmiksować do czasu połączenia się składników.',
        'Dodać mąkę, proszek do pieczenia, cynamon, cukier, cukier waniliowy i 150 g drobno pokrojonej czekolady. Całość krótko zmiksować.',
        'Na koniec dodać ubitą pianę z białek i wymieszać delikatnie łyżką.',
        'Ciasto przełożyć do podłużnej formy wyłożonej papierem do pieczenia. Piec 60 minut w temperaturze 180°C.',
        'Po ostudzeniu ciasto polać polewą czekoladową. W garnku podgrzać na małym ogniu śmietankę z połamaną na cząstki czekoladą. Całość mieszać do czasu całkowitego rozpuszczenia. Ciasto polać lekko przestudzoną polewą. Można posypać owocami (np. truskawkami lub malinami).',
      ],
      [
        new Ingredient('mąka przenna', 250),
        new Ingredient('cukier', 3),
        new Ingredient('cukier waniliowy ', 4),
        new Ingredient('proszek do pieczenia', 21),
        new Ingredient('banan', 5),
        new Ingredient('jajko', 7),
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

  // This function return searched recipe, and also inform as if it find recipe,
  // If this function doesn't find the recipe, it return first recipe and status false
  getRecipeByName(name: string) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (name === this.recipes[i].name.replaceAll(' ', '-')) {
        return { recipe: this.recipes[i], recipefoundStatus: true };
      }
    }

    return { recipe: this.recipes[0], recipefoundStatus: false };
  }
}
