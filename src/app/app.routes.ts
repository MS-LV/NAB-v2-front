import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    // data: {icon: 'home'},
    loadComponent: () =>
      import('@student_views/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'dictionary',
    title: 'Dictionary',
    // data: {icon: 'library_books'},
    loadComponent: () =>
      import('@student_views/dictionary/dictionary.component').then(
        m => m.DictionaryComponent
      ),
  },
  {
    path: 'sign-in',
    title: 'Sign In',
    // data: {icon: 'assignment_ind'},
    loadComponent: () =>
      import('@student_views/sign-in/sign-in.component').then(m => m.SignInComponent),
  },
  {
    path: 'tree',
    title: 'Tree',
    // data: {icon: 'home'},
    loadComponent: () =>
      import('@student_views/tree-page/tree-page.component').then(
        m => m.TreePageComponent
      ),
  },
  {
    path: 'nav',
    title: 'Nav Bar',
    // data: {icon: 'home'},
    loadComponent: () =>
      import('@student_views/nav-bar/nav-bar.component').then(m => m.NavBarComponent),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    // data: {icon: 'dashboard'},
    loadComponent: () =>
      import('@student_views/user-dashboard/user-dashboard.component').then(
        m => m.UserDashboardComponent
      ),
  },
  {
    path: 'table',
    title: 'Table',
    // data: {icon: 'table_chart'},
    loadComponent: () =>
      import('@student_views/user-table/user-table.component').then(
        m => m.UserTableComponent
      ),
  },
];
