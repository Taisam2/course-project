import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() choice = new EventEmitter<{choice: string}>();
       
    changeToRecipes(choice: string) {
        this.choice.emit({
            choice: choice
        });
    }

    changeToShoppingList(choice: string) {
        this.choice.emit({
            choice: choice
        });
    }
}