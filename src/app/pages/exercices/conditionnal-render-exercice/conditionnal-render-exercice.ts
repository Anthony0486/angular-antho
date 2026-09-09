import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signal, computed } from '@angular/core';
@Component({
  imports: [FormsModule],
  selector: 'app-conditionnal-render-exercice',
  styleUrl: './conditionnal-render-exercice.css',
  templateUrl: './conditionnal-render-exercice.html',
})
export class ConditionnalRenderExercice {
  friendList = signal<string[]>([]);

  friendName: string = '';

  listFriendsCreationsStatus = computed(() =>
    this.friendList().length === 0
      ? '🥶 Aucun ami ajouté pour le moment..'
      : '🥳 Votre ami a été ajouté !',
  );

  onClickAddFriend() {
    this.friendList.update((list) => [...list, this.friendName]);
    this.friendName = '';
  }

}
