import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, first, tap } from 'rxjs/operators';
import { RoutesPath } from '@/app.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class StudentComponent implements OnInit {
  routerPaths = signal<RoutesPath[]>([]);
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
      first(),
      tap(v => {
        console.log(v);
      })
    );
  constructor() {}

  ngOnInit(): void {
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
    this.routerPaths.set(routes);
    console.log(this.router.config);
  }
}
