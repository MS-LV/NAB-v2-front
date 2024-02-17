import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./views/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'dictionary',
    title: 'Dictionary',
    loadComponent: () =>
      import('./views/dictionary/dictionary.component').then(
        m => m.DictionaryComponent
      ),
  },
  {
    path: 'sign-in',
    title: 'Sign In',
    loadComponent: () =>
      import('./views/sign-in/sign-in.component').then(m => m.SignInComponent),
  },
  {
    path: 'tree',
    title: 'Tree',
    loadComponent: () =>
      import('./views/tree-page/tree-page.component').then(
        m => m.TreePageComponent
      ),
  },
  {
    path: 'nav',
    title: 'Nav Bar',
    loadComponent: () =>
      import('./views/nav-bar/nav-bar.component').then(m => m.NavBarComponent),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () =>
      import('./views/user-dashboard/user-dashboard.component').then(
        m => m.UserDashboardComponent
      ),
  },
  {
    path: 'table',
    title: 'Table',
    loadComponent: () =>
      import('./views/user-table/user-table.component').then(
        m => m.UserTableComponent
      ),
  },
];
