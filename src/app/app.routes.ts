import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'dictionary',
        loadComponent: () => import('./views/dictionary/dictionary.component').then(m => m.DictionaryComponent)
    }
]
