import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  imports: [FormsModule],
  selector: 'app-two-way-binding-exercice',
  styleUrl: './two-way-binding-exercice.css',
  templateUrl: './two-way-binding-exercice.html',
})
export class TwoWayBindingExercice {
  user: User = {
    id: 1,
    name: 'John Doe',
    age: 40,
    img: 'assets/mario.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Online',
    github: 'https://github.com/johndoe',
  };
  
  initialUser= {...this.user}

  onSubmitReset() {
    this.user = {...this.initialUser}
    }
  }

