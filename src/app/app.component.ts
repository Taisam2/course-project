import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkChoice = 'recipes';

  onChoiceMade(choiceData: {choice: string}) {
    this.linkChoice = choiceData.choice
  }
  
}
