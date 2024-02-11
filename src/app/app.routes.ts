import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dictionary',
        loadComponent: () => import('./views/dictionary/dictionary.component').then(m => m.DictionaryComponent)
    }
]
