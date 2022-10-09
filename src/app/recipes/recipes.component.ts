import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() presentSelectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  intakeSelectedRecipe(recipeItem: Recipe){
    this.presentSelectedRecipe = recipeItem;
  }

}
