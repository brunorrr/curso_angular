import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-cc8a3.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-cc8a3.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
