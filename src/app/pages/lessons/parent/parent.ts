import { Component } from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  parentMessage: string = 'Ici le parent balance des infos intra ENFANT';
  counterParent: number = 0;
  childNotification: string | null = null;
  toChildSelect: string = '';
  childName: string | null = null;


  increaseCounter() {
    this.counterParent++;
  }

  decreaseCounter() {
    if (this.counterParent > 0) {
      this.counterParent--;
    }
  }

  //! Reaction dans le parent à la notification de l'enfant (l'event custom)
  handleNotification(eventMsg: string) {
    console.log(eventMsg);
    this.childNotification = eventMsg;
  }

  handleChildName(eventMsg: string){
    this.childName = eventMsg;
  }

}