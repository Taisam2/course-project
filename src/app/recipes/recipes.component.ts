import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  @Input() presentSelectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.presentSelectedRecipe = recipe;
        }
      );
  }

  intakeSelectedRecipe(recipeItem: Recipe){
    this.presentSelectedRecipe = recipeItem;
  }

}
