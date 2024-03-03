import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPath } from '@/app.interface';

@Injectable()
export class StudentService {
  constructor(private router: Router) {}

  routerLinks() {
    const studentPaths = this.router.config.find(
      path => path.path === 'student'
    );
    const routes = (studentPaths!.children as RoutesPath[]).map(
      ({ title, path, data }) => ({
        title,
        path,
        data,
      })
    ) as RoutesPath[];
    return routes;
  }
}
