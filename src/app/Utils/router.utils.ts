export function routeBaseConfig(path: string, title: string, icon = '') {
  return {
    path,
    title,
    data: { icon },
  };
}
