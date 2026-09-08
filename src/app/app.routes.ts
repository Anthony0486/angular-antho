import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'lessons',
    loadChildren: () => import('./pages/lessons/lessons.routes').then((m) => m.LESSONS_ROUTES),
  },
  {
    path: 'exercices',
    loadChildren: () => import('./pages/exercices/exercices.routes').then((m) => m.EXERCICES_ROUTES),
  },
  {
    path: 'evaluations',
    loadChildren: () => import('./pages/evaluations/evaluations.routes').then((m) => m.EVALUATIONS_ROUTES),
  },
    {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
