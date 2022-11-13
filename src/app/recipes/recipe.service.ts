import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

import { Recipe } from "../models/recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'Chocolate Bar', 
          'Regular swiss Chocolate', 
          'https://www.thespruceeats.com/thmb/pn4JQhIbIgi0mb_FFkl0Bd_aU_s=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homemade-raw-vegan-chocolate-recipe-3377425-hero-01-e1ed575a419e4a9a9bc94f3bb1ed1d97.jpg',
          [
            new Ingredient('Choco Beans', 50),
            new Ingredient('Sugar', 100),
            new Ingredient('Oat Milk', 50),
          ]),
        new Recipe(
          'Space Cookies', 
          'Fly as fu@ Cookies', 
          'https://www.dutch-passion.com/img/nieuws_org/cannabis-cookies-dutch-passion-seed-company-buds-and-chocolate-cookies.jpg',
        [
            new Ingredient('Cookie Material', 100),
            new Ingredient('Silver Haze', 30),
            new Ingredient('Sweet OG Kush, Baby', 10),
        ]
        ),
        new Recipe('Space Brownie', 'Awesome Brownie for flying around', 'https://www.royalqueenseeds.de/modules/prestablog/themes/royalqueenseeds/up-img/184.jpg',
        [
          new Ingredient('Brownie Material', 100),
            new Ingredient('Silver Haze', 30),
            new Ingredient('Sweet OG Kush, Baby', 10),
        ]
        ),
      ];

      constructor(private slService: ShoppingListService) {}
    
      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}