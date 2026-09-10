import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  // ? @Input c'est l'Equivalent des PROPS sur les autre frameworks
  // !Déclarer propriété obligatoire (cela ne peut pas être undefined)
  // @Input() message!: string;
  // @Input() counter!: number;
  // ?phase 1 : Ici on déclare notre prore Event
  @Output() notify = new EventEmitter<string>();
  @Output() notify2 = new EventEmitter<string>();

  // !Déclarer propriété optionnelle avec ? (cela peut être undefined)
  @Input() message?: string;
  @Input() counter?: number;
  @Input() select?: string;
  //! Déclarer propriété avec valeur par défaut (Faut être sûr que ca sera pas undefined)
  // @Input() message: string='';
  // @Input() counter: number=0;

  notifyParent() {
    // ? phase 2 : On fais l'emmission de
    // ! Emmission de l'event custom avec counter dedans
    this.notify.emit(`Counter is now from enfant: ${this.counter}`);
    // this.notify.emit(`Counter is now from enfant: ${this.counter}`);
  }

  childNameNotifyParent() {
    this.notify2.emit(this.select);
  }
}