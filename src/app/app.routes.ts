import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {breadcrumb: 'Accueil'}
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: {breadcrumb: 'Accueil'}
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    data: {breadcrumb: 'A propos'}
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    data: {breadcrumb: 'Contact'}
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
    path: 'tp-component-manip',
    loadComponent: () => import('./pages/tp-component-manip/tp-component-manip').then((m) => m.TpComponentManip),
    data: {breadcrumb: 'Nesting de composants'}
  },
    {
    path: 'tp-component-communication',
    loadComponent: () => import('./pages/tp-component-communication/active-user-component/active-user-component').then((m) => m.ActiveUserComponent),
    data: {breadcrumb: 'TP Communication'}
  },
  {
    path: 'evaluations',
    loadChildren: () => import('./pages/evaluations/evaluations.routes').then((m) => m.EVALUATIONS_ROUTES),
     data: { breadcrumb: 'Evaluations' }
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    data: {breadcrumb: 'Not found'}
  },
];
