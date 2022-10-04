import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Cake with chocolate', 'https://www.thespruceeats.com/thmb/pn4JQhIbIgi0mb_FFkl0Bd_aU_s=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homemade-raw-vegan-chocolate-recipe-3377425-hero-01-e1ed575a419e4a9a9bc94f3bb1ed1d97.jpg'),
    new Recipe('Test Recipe 2', 'Cake with chocolate', 'https://www.thespruceeats.com/thmb/pn4JQhIbIgi0mb_FFkl0Bd_aU_s=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homemade-raw-vegan-chocolate-recipe-3377425-hero-01-e1ed575a419e4a9a9bc94f3bb1ed1d97.jpg'),
    new Recipe('Test Recipe 3', 'Cake with chocolate', 'https://www.thespruceeats.com/thmb/pn4JQhIbIgi0mb_FFkl0Bd_aU_s=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homemade-raw-vegan-chocolate-recipe-3377425-hero-01-e1ed575a419e4a9a9bc94f3bb1ed1d97.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
