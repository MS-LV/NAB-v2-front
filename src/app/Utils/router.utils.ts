export function routeBaseConfig(path: string, title: string, icon: string = '') {
    return {
      path,
      title,
      data: {icon}
    }
  }