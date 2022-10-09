import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild,  } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('name', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amount', {static: false}) amountInputRef: ElementRef;
  @Output() addInputItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.addInputItem.emit(newIngredient);
  }

}
