import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.scss'],
})
export class RecipeDescriptionComponent implements OnInit {
  @ViewChild('ingredientsList', { static: true }) ingredientsList: ElementRef;
  recipe: Recipe;
  recipeName: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeName = params.name;

      const recipeData = this.recipeService.getRecipeByName(this.recipeName);
      this.recipe = recipeData.recipe;

      /// Whent wy change url manually and url is wrong we are loading first recipe
      if (!recipeData.recipefoundStatus) {
        this.router.navigate([
          '/recipe/' + this.recipe.name.replaceAll(' ', '-'),
        ]);
      }
    });
  }

  addToShoppingList() {
    // const checkboxes = Array.from(     the same solution as bellow
    //   this.ingredientsList.nativeElement.querySelectorAll(
    //     'input[type="checkbox"]'
    //   )
    // );
    // Here [...] because forEach needs to be an array
    const checkboxes = [
      ...this.ingredientsList.nativeElement.querySelectorAll(
        'input[type="checkbox"]'
      ),
    ];

    const checkboxValues = [];

    checkboxes.forEach((checkbox: HTMLInputElement) => {
      checkboxValues.push(checkbox.checked);
    });

    console.log(checkboxValues);
  }
}
