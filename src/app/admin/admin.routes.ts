import { Routes } from '@angular/router';
import { routeBaseConfig } from '@/Utils/router.utils';
import { RedirectHandler } from 'undici-types';

export function adminRoutes(): Routes {
  const redirect: RedirectHandler = {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  };
  const dashboard = {
    ...routeBaseConfig('dashboard', 'Dashboard', { icon: 'home' }),
    loadComponent: () =>
      import('@admin/views/dashboard/dashboard.component').then(
        m => m.DashboardComponent
      ),
  };
  const setting = {
    ...routeBaseConfig('setting', 'Settings', { icon: 'settings' }),
    loadComponent: () =>
      import('@admin/views/setting/setting.component').then(
        m => m.SettingComponent
      ),
  };
  const folder = {
    ...routeBaseConfig('folder', 'Folder', { icon: 'folder_open' }),
    children: [
      {
        ...routeBaseConfig('', 'Folder'),
        loadComponent: () =>
          import('@admin/views/folder/folder.component').then(
            m => m.FolderComponent
          ),
      },
      {
        ...routeBaseConfig('dictionary', 'Dictionary'),
        loadComponent: () =>
          import(
            '@admin/views/folder/views/dictionary/dictionary.component'
          ).then(m => m.DictionaryComponent),
      },
      {
        ...routeBaseConfig('testing', 'Testing'),
        loadComponent: () =>
          import('@admin/views/folder/views/testing/testing.component').then(
            m => m.TestingComponent
          ),
      },
    ],
  };
  const users = {
    ...routeBaseConfig('users', 'Users', { icon: 'group' }),
    loadComponent: () =>
      import('@admin/views/users/users.component').then(m => m.UsersComponent),
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
  const login = {
    ...routeBaseConfig('login', 'Login', { icon: 'login' }),
    loadComponent: () =>
      import('@/components/login/login.component').then(m => m.LoginComponent),
  };
  return [
    {
      path: 'admin',
      loadComponent: () =>
        import('@admin/admin.component').then(m => m.AdminComponent),
      children: [
        redirect,
        dashboard,
        setting,
        folder,
        users,
        profile,
        history,
        login,
      ],
    },
  ];
}
