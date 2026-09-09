import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-two-way-binding-lesson',
  styleUrl: './two-way-binding-lesson.css',
  templateUrl: './two-way-binding-lesson.html',
})
export class TwoWayBindingLesson {
username: string = 'Hello';
  studyLevel: string = '99';
  isSearchingJob: boolean = true;

  resetForm(): void {
    this.username = '';
    this.studyLevel = '';
    this.isSearchingJob = false;
  }
}
