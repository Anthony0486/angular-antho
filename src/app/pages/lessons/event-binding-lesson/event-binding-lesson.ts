import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding-lesson',
  styleUrl: './event-binding-lesson.css',
  templateUrl: './event-binding-lesson.html',
})
export class EventBindingLesson {
  //Etat du composant
  username: string = '';
  clickCount: number = 0;


  /**
   * Réagit à l'événement de saisie (input)
   * @param event Contient les détails de l'évenement HTML
   */
  onInputChange(event: Event) {
    //On recupère la cible de l'évenement et on le cast en HTMLInputElement
    //pour accéder à sa propriété .value en toute sécurité
    const input = event.target as HTMLInputElement;
    this.username = input.value;

    console.log('Nouvelle valeur : ', this.username);
  };

  onButtonClick() {
    this.clickCount++;
  };
};
