import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-signals-exercice',
  styleUrl: './signals-exercice.css',
  templateUrl: './signals-exercice.html',
})
export class SignalsExercice {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.update(value => Math.max(0, value - 1));    
  }

  reset() {
    this.count.set(0);
  }
}
