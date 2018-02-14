import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{

    recipes: Recipe[] = [
        new Recipe('A test recipe', 
                'desc', 
                'https://image.prntscr.com/image/C-Xi_Z0DQoi-yMENJIftxA.png')
    ];

}