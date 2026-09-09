import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  age: number;
  img: string;
  bio: string;
  status: 'Online' | 'Offline';
  github: string;
}
@Component({
  imports: [],
  selector: 'app-attribute-binding-exercice',
  styleUrl: './attribute-binding-exercice.css',
  templateUrl: './attribute-binding-exercice.html',
})

export class AttributeBindingExercice {
  user: User = {
    id: 1,
    name: 'John Doe',
    age: 40,
    img: 'assets/mario.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Online',
    github: 'https://github.com/johndoe'
  };
}
