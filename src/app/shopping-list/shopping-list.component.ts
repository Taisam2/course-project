import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredient: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient('Chocolate', 1000),
    new Ingredient('Sugar', 50),
    new Ingredient('Cake Stuff', 500),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewIgredient(ingredientAdded: Ingredient) {
    this.ingredients.push(ingredientAdded);
  }
}
