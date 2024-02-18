import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, first, tap } from 'rxjs/operators';
import { HeaderComponent } from '@student_components/header/header.component';
import { RoutesPath } from '@/app.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HeaderComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = signal('Hello');
  routerPaths = signal<RoutesPath[]>([]);
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);
  ngOnInit(): void {
    
    const routes = <RoutesPath[]>this.router.config.map(({title, path, data}) => ({title, path, data}));
    this.routerPaths.set(routes);
    console.log(this.routerPaths());
    
    
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
      first(),
      tap((v) => {
        console.log(v)
      })
    );
}
