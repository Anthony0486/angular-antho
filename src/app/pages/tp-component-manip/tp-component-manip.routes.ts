import { Routes } from '@angular/router';

export const TP_COMPONENT_MANIP_ROUTES: Routes = [
    {
        path: 'tp-component-manip',
        loadComponent: () => import('./tp-component-manip').then((m) => m.TpComponentManip),
    },
];