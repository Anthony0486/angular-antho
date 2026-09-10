import { Routes } from '@angular/router';

export const LESSONS_ROUTES: Routes = [
    {
        path: 'text-interpolation-lesson',
        loadComponent: () => import('./text-interpolation-lesson/text-interpolation-lesson').then((m) => m.TextInterpolationLesson),
         data: { breadcrumb: 'Interpolation' }
    },
    {
        path: 'event-binding-lesson',
        loadComponent: () => import('./event-binding-lesson/event-binding-lesson').then((m) => m.EventBindingLesson),
         data: { breadcrumb: `Liaison d'évenements` }
    },
    {
        path: 'two-way-binding-lesson',
        loadComponent: () => import('./two-way-binding-lesson/two-way-binding-lesson').then((m) => m.TwoWayBindingLesson),
         data: { breadcrumb: 'Liaison bidirectionnelle' }
    },  
    {
        path: 'signals-lesson',
        loadComponent: () => import('./signals-lesson/signals-lesson').then((m) => m.SignalsLesson),
         data: { breadcrumb: 'Les "Signals"' }
    },
    {
        path: 'parent',
        loadComponent: () => import('./parent/parent').then((m) => m.Parent),
         data: { breadcrumb: 'Communication entre composants' }
    }
];