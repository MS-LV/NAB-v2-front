import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-history-testing',
  templateUrl: './history-testing.component.html',
  styleUrl: './history-testing.component.scss',
  standalone: true,
  imports: [RouterLink],
})
export class HistoryTestingComponent {}