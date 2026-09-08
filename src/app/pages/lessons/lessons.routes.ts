import { Routes } from '@angular/router';

export const LESSONS_ROUTES: Routes = [
    {
        path: 'text-interpolation-lesson',
        loadComponent: () => import('./text-interpolation-lesson/text-interpolation-lesson').then((m) => m.TextInterpolationLesson),
    },
    {
        path: 'event-binding-lesson',
        loadComponent: () => import('./event-binding-lesson/event-binding-lesson').then((m) => m.EventBindingLesson),
    },
    {
        path: 'two-way-binding-lesson',
        loadComponent: () => import('./two-way-binding-lesson/two-way-binding-lesson').then((m) => m.TwoWayBindingLesson),
    }
];