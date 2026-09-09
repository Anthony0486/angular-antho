import { Routes } from '@angular/router';

export const EVALUATIONS_ROUTES: Routes = [
  {
    path: 'evaluation1',
    loadComponent: () => import('./evaluation1/evaluation1').then((m) => m.Evaluation1),
  },
];
