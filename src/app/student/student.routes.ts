import { Routes } from '@angular/router';
import { routeBaseConfig } from '@/Utils/router.utils';

export function studentRoutes(): Routes {
  const home = {
    ...routeBaseConfig('home', 'Home', 'home'),
    loadComponent: () =>
      import('@student_views/home/home.component').then(m => m.HomeComponent),
  };
  const testing = {
    ...routeBaseConfig('testing', 'Testing', 'school'),
    loadComponent: () =>
      import('@student_views/testing/testing.component').then(
        m => m.TestingComponent
      ),
  };
  const dictionary = {
    ...routeBaseConfig('dictionary', 'Dictionary', 'library_books'),
    loadComponent: () =>
      import('@student_views/dictionary/dictionary.component').then(
        m => m.DictionaryComponent
      ),
  };
  const profile = {
    ...routeBaseConfig('profile', 'Profile', 'person'),
    loadComponent: () =>
      import('@student_views/profile//profile.component').then(
        m => m.ProfileComponent
      ),
  };
  const history = {
    ...routeBaseConfig('history', 'History', 'history'),
    children: [
      {
        ...routeBaseConfig('', 'History'),
        loadComponent: () =>
          import('@student_views/history/history.component').then(
            m => m.HistoryComponent
          ),
      },
      {
        ...routeBaseConfig('dictionary', 'History -> Dictionary'),
        loadComponent: () =>
          import(
            '@student_views/history/history-dictionary/history-dictionary.component'
          ).then(m => m.HistoryDictionaryComponent),
      },
      {
        ...routeBaseConfig('testing', 'History -> Testing'),
        loadComponent: () =>
          import(
            '@student_views/history/history-testing/history-testing.component'
          ).then(m => m.HistoryTestingComponent),
      },
    ],
  };
  const login = {
    ...routeBaseConfig('login', 'Login', 'login'),
    loadComponent: () =>
      import('@student_views/login/login.component').then(
        m => m.LoginComponent
      ),
  };
  return [
    {
      path: 'student',
      loadComponent: () =>
        import('@student/student.component').then(m => m.StudentComponent),
      children: [
        home,
        testing,
        dictionary,
        profile,
        history,
        login,
      ],
    },
  ];
}
