import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-text-interpolation-exercice',
  styleUrl: './text-interpolation-exercice.css',
  templateUrl: './text-interpolation-exercice.html',
})
export class TextInterpolationExercice {
  title = 'Uilisateurs';
  notifications = 40;
  isAdmin = true;
  themes = ['Sombre', 'Clair'];
  users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
  ];
};
