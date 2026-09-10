import { Component, input, output } from '@angular/core';
import { User } from '../user-data-component/user-data-component';

@Component({
  selector: 'app-component-communication-component',
  template: `
    <form class="justify-self-center fieldset bg-base-300 border-base-300 rounded-box w-100 border mb-4 p-4" (submit)="updateUser(nameInput.value, ageInput.value, $event)">
      <legend class="fieldset-legend text-lg">Mettre à jour les données</legend>
      <label class="font-bold text-base" for="name-input">Saisissez votre nom :</label>
      <input #nameInput id="userName" type="text" placeholder="Tappez le nom" [value]="user()?.name ?? ''" required />
       <label class="font-bold text-base" for="age-input">Saisissez votre âge :</label>
      <input #ageInput id="userAge" type="number" placeholder="Tappez l'âge" [value]="user()?.age ?? ''" min="0" required />
      <input class="whitespace-nowrap mt-6 justify-self-center bg-success btn w-60" type="submit" value="MAJ des datas">
    </form>
    
  `,
})
export class ComponentCommunicationComponent {
  user = input<User>();
  onUserUpdate = output<User>();

  updateUser(name: string, age: string, event: SubmitEvent) {
    event.preventDefault();
    this.onUserUpdate.emit({
      name,
      age: Number(age),
    });
  }
}
