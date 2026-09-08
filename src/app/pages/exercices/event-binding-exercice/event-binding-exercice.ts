import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding-exercice',
  styleUrl: './event-binding-exercice.css',
  templateUrl: './event-binding-exercice.html',
})
export class EventBindingExercice {
  inputText: string = '';

  listFriendsCreationsStatus: string = 'Aucun ami';

  isButtonDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = true;
    }, 5000);
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputText = input.value;
  }

  onClickAddFriend() {
    this.listFriendsCreationsStatus = '🥳 Votre ami a été ajouté !';
  }
}