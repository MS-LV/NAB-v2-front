import { Component, signal } from '@angular/core';
import {
  GrammarList,
  grammarListExample,
} from '@student/views/testing/components/grammar/grammar.interface';

@Component({
  selector: 'com-listening',
  standalone: true,
  imports: [],
  templateUrl: './listening.component.html',
  styleUrl: './listening.component.scss',
})
export class ListeningComponent {
  listeningList = signal<GrammarList[]>(grammarListExample);
}
