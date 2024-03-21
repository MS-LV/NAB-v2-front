import { Routes } from '@angular/router';
import { studentRoutes } from '@student/student.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    title: 'Welcome',
    loadComponent: () => import('@/views/welcome/welcome.component').then(
      m => m.WelcomeComponent
    )
  },
  ...studentRoutes(),
];
