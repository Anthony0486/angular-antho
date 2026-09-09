import { Component } from '@angular/core';
import {signal,computed,effect} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-signals-lesson',
  styleUrl: './signals-lesson.css',
  templateUrl: './signals-lesson.html',
})
export class SignalsLesson {
  // Exemple 1 : Compteur réactif
  count = signal(0);
  multiplier = signal(2);

  // Signal dérivé avec `computed`
  // ! computed est utilisé pour définir des valeurs qui dépendent d'autres signals ou d'autres données réactives.
  // ! Ces valeurs sont automatiquement recalculées uniquement lorsque les dépendances changent.
  // ! Objectif principal : Produire des valeurs dérivées de manière efficace.
  // ! Exemple d'usage : Calculer des données comme des totaux, des filtres, ou des transformations.

  multipliedCount = computed(() => this.count() * this.multiplier());

  // Exemple 2 : Historique des valeurs
  countHistory = signal<number[]>([]);

  // Exemple 3 : Conversion d'unités
  distanceKm = signal(1);
  distanceMiles = computed(() => this.distanceKm() * 0.621371);

  constructor() {
    // Effet pour observer les changements de `count` et mettre à jour l'historique
    // ! effect est utilisé pour exécuter des effets secondaires (comme des opérations qui ne produisent pas de valeur), en réponse à des changements de signals.
    // ! Les effets sont automatiquement déclenchés lorsqu'une ou plusieurs dépendances changent.
    // ! Objectif principal : Réagir aux modifications des données pour déclencher une action (ex. : mise à jour du DOM, appel d'API, logs).
    // ! Exemple d'usage : Synchroniser les données avec une API ou mettre à jour l'interface utilisateur.
    // Un peu équivalent aux watchers vus en VUE
    effect(() => {
      const currentCount = this.count();
      this.updateHistory(currentCount); // Met à jour l'historique
      console.log(
        `[Effet déclenché] Le compteur est maintenant ${currentCount}, ` +
        `valeur multipliée : ${this.multipliedCount()}. Historique : ${this.countHistory().join(', ')}`
      );
    });
  }

  // Méthodes pour gérer le compteur
  // Utilise SET pour mettre a jour la valeur
  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }

  changeMultiplier(value: any) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.multiplier.set(parsedValue);
    }
  }

  reset() {
    this.count.set(0);
    this.multiplier.set(2);
    this.countHistory.set([]);
  }

  // Méthode pour mettre à jour l'historique
  private updateHistory(value: number) {
    const history = this.countHistory();
    const maxHistoryLength = 10;
    if (history[history.length - 1] !== value) {
      const newHistory = [...history, value];
      if (newHistory.length > maxHistoryLength) {
        newHistory.shift(); // Supprime la première valeur si la limite est atteinte
      }
      this.countHistory.set(newHistory);
    }
  }

  // Méthodes pour la conversion d'unités
  changeDistanceKm(value: any) {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      this.distanceKm.set(parsedValue);
    }
  }
}
