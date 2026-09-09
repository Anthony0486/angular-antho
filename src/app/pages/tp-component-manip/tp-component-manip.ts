import { Component } from '@angular/core';
import { Composant1 } from './composant-1/composant-1'
import { Composant2 } from './composant-2/composant-2'
import { Composant3 } from './composant-3/composant-3'

@Component({
  imports: [Composant1, Composant2, Composant3],
  selector: 'app-tp-component-manip',
  styleUrl: './tp-component-manip.css',
  templateUrl: './tp-component-manip.html',
})
export class TpComponentManip {}
