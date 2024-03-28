import { Routes } from '@angular/router';
import { routeBaseConfig } from '@/Utils/router.utils';
import { RedirectHandler } from 'undici-types';

export function studentRoutes(): Routes {
  const redirect: RedirectHandler = {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  };
  const home = {
    ...routeBaseConfig('home', 'Home', { icon: 'home' }),
    loadComponent: () =>
      import('@student_views/home/home.component').then(m => m.HomeComponent),
  };
  const testing = {
    ...routeBaseConfig('testing', 'Testing', { icon: 'school' }),
    loadComponent: () =>
      import('@student_views/testing/testing.component').then(
        m => m.TestingComponent
      ),
  };
  const dictionary = {
    ...routeBaseConfig('dictionary', 'Dictionary', { icon: 'library_books' }),
    loadComponent: () =>
      import('@student_views/dictionary/dictionary.component').then(
        m => m.DictionaryComponent
      ),
  };
  const profile = {
    ...routeBaseConfig('profile', 'Profile', { icon: 'person' }),
    loadComponent: () =>
      import('@/components/profile/profile.component').then(
        m => m.ProfileComponent
      ),
  };
  const history = {
    ...routeBaseConfig('history', 'History', { icon: 'history' }),
    children: [
      {
        ...routeBaseConfig('', 'History'),
        loadComponent: () =>
          import('@/components/history/history.component').then(
            m => m.HistoryComponent
          ),
      },
      {
        ...routeBaseConfig('dictionary', 'History -> Dictionary'),
        loadComponent: () =>
          import(
            '@/components/history/history-dictionary/history-dictionary.component'
          ).then(m => m.HistoryDictionaryComponent),
      },
      {
        ...routeBaseConfig('testing', 'History -> Testing'),
        loadComponent: () =>
          import(
            '@/components/history/history-testing/history-testing.component'
          ).then(m => m.HistoryTestingComponent),
      },
    ],
  };

  console.log('history: ', history);

  const login = {
    ...routeBaseConfig('login', 'Login', { icon: 'login' }),
    loadComponent: () =>
      import('@/components/login/login.component').then(m => m.LoginComponent),
  };
  return [
    {
      path: 'student',
      loadComponent: () =>
        import('@student/student.component').then(m => m.StudentComponent),
      children: [redirect, home, testing, dictionary, profile, history, login],
    },
  ];
}
