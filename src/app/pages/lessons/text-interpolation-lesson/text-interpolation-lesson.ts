import { Component } from '@angular/core';

interface Hobbies {
  reading: string;
  cycling: string;
  cooking: string;
}

@Component({
  imports: [],
  selector: 'app-text-interpolation-lesson',
  styleUrl: './text-interpolation-lesson.css',
  templateUrl: './text-interpolation-lesson.html',
})
export class TextInterpolationLesson {
    title: string = 'Bienvenue dans notre super mega cours Angular';
  description: string =
  "La text interpolation vous permet d'afficher des données dynamiques dans votre template.";
  currentDate: Date = new Date();

  xss:string= '<script>LOL</script>'
  username: string = 'John Doe';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  hobbies: Hobbies = {
    reading: 'Intermédiaire',
    cycling: 'Avancé',
    cooking: 'Débutant',
  };

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  }
}