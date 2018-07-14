import { Recipe } from '../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://brunoricci.com.br/images/casa_baratheon.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ], 1),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://brunoricci.com.br/images/casa_greyjoy.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ], 2)
    ];

    constructor(private shopListService: ShoppingListService) { }

    getRecipes() {
        // Cloning recipes array and returning it
        return this.recipes.slice();
    }

    addIngredientsToShopList( ingredients: Ingredient[]) {
        this.shopListService.addIngredients( ingredients );
    }
}
