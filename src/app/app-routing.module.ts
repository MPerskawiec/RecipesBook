import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RecipeDescriptionComponent } from './recipe/recipe-description/recipe-description.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  {
    path: 'recipe',
    component: RecipeComponent,
    children: [{ path: ':name', component: RecipeDescriptionComponent }],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
