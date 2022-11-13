import { Component, OnInit, ElementRef, ViewChild,  } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('name', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amount', {static: false}) amountInputRef: ElementRef;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.slService.addIngredient(newIngredient);
  }

}
