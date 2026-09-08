import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-two-way-binding-lesson',
  styleUrl: './two-way-binding-lesson.css',
  templateUrl: './two-way-binding-lesson.html',
})
export class TwoWayBindingLesson {
  username: string = 'Jean Dupont';
  usermail: string = '';
}
