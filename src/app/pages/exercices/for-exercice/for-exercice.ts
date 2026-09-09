import { Component } from '@angular/core';

  interface UserProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean
    role: string;
  }

@Component({
  imports: [],
  selector: 'app-for-exercice',
  styleUrl: './for-exercice.css',
  templateUrl: './for-exercice.html',
})

export class ForExercice {

     userProfiles: UserProfile[] = [  
    {
      id: 1,
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@example.com',
      isActive: true,
      role: 'administrateur'
    },
    {
      id: 2,
      firstName: 'Jeane',
      lastName: 'Dupont',
      email: 'jeane.dupont@example.com',
      isActive: false,
      role: 'manager'
    },
  ];

}
