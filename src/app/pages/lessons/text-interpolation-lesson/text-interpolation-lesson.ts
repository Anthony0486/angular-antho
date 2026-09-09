import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-text-interpolation-lesson',
  styleUrl: './text-interpolation-lesson.css',
  template: `
    <p>Your color preference is {{ theme }}.</p>
  `,
})
export class TextInterpolationLesson {
  theme = 'dark'; 
}