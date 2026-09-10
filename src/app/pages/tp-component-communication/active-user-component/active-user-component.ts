import { Component } from '@angular/core';
import { User } from '../user-data-component/user-data-component';
import { ComponentCommunicationComponent } from '../component-communication-component/component-communication-component';

@Component({
  imports: [ComponentCommunicationComponent],
  selector: 'app-active-user-component',
  template: `
    <div class="card card-side bg-base-300 shadow-sm w-100 m-2 justify-self-center">
      <div class="card-body">
        <h2 class="card-title">Affichage des données</h2>
        <p>Nom: {{ activeUser.name }}</p>
        <p>Age: {{ activeUser.age }}</p>
      </div>
    </div>
<div>
    <app-component-communication-component
      [user]="activeUser"
      (onUserUpdate)="handleUserUpdate($event)"
    />
    </div>
  `,
})
export class ActiveUserComponent {
  activeUser: User = {
    name: 'Jean Robert',
    age: 30,
  };

  handleUserUpdate(user: User) {
    this.activeUser = user;
  }
}
