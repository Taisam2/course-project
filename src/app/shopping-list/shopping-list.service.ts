import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

export class ShoppingListService {
    ingrendientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Chocolate', 1000),
        new Ingredient('Sugar', 50),
        new Ingredient('Cake Stuff', 500),
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrendientsChanged.emit(this.ingredients.slice());
      }
      
      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingrendientsChanged.emit(this.ingredients.slice());
      }

}