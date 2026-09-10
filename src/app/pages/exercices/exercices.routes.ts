import { Routes } from '@angular/router';

export const EXERCICES_ROUTES: Routes = [
  {
    path: 'text-interpolation-exercice',
    loadComponent: () =>
      import('./text-interpolation-exercice/text-interpolation-exercice').then(
        (m) => m.TextInterpolationExercice,
      ),
      data: { breadcrumb: "Interpolation" }
  },
  {
    path: 'attribute-binding-exercice',
    loadComponent: () =>
      import('./attribute-binding-exercice/attribute-binding-exercice').then(
        (m) => m.AttributeBindingExercice,
      ),
       data: { breadcrumb: `Liaison d'attributs` }
  },
  {
    path: 'event-binding-exercice',
    loadComponent: () =>
      import('./event-binding-exercice/event-binding-exercice').then((m) => m.EventBindingExercice),
    data: { breadcrumb: `Liaison d'évenements` }
  },
  {
    path: 'two-way-binding-exercice',
    loadComponent: () =>
      import('./two-way-binding-exercice/two-way-binding-exercice').then(
        (m) => m.TwoWayBindingExercice,
      ),
      data: { breadcrumb: "Liaison bidirectionnelle" }
  },
  {
    path: 'signals-exercice',
    loadComponent: () =>
      import('./signals-exercice/signals-exercice').then((m) => m.SignalsExercice),
    data: { breadcrumb: `Les "Signals"` }
  },
  
  {
    path: 'conditionnal-render-exercice',
    loadComponent: () =>
      import('./conditionnal-render-exercice/conditionnal-render-exercice').then(
        (m) => m.ConditionnalRenderExercice,
      ),
      data: { breadcrumb: "Rendu conditionnel" }
  },
  {
    path: 'for-exercice',
    loadComponent: () => import('./for-exercice/for-exercice').then((m) => m.ForExercice),
    data: { breadcrumb: "Les boucles" }
  },
];
