import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredient: Ingredient;

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingrendientsChanged
      .subscribe(
        (ingriedients: Ingredient[]) => {
          this.ingredients = ingriedients;
        }
      );
  }

  addNewIgredient(ingredientAdded: Ingredient) {
    this.ingredients.push(ingredientAdded);
  }
}
