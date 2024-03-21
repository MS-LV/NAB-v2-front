import { Component, signal, Input, Output, EventEmitter } from '@angular/core';
import {
  GrammarList,
  grammarListExample,
} from '@student/views/testing/components/grammar/grammar.interface';
import { FormGroup } from '@angular/forms';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import {
  Activities,
  ActivityMessageType,
} from '@student_views/testing/testing.constants';
import { QuestionFormComponent } from '@student_views/testing/components/question-form/question-form.component';

@Component({
  selector: 'comp-listening',
  standalone: true,
  imports: [QuestionFormComponent],
  templateUrl: './listening.component.html',
  styleUrl: './listening.component.scss',
})
export class ListeningComponent {
  @Input() formGroup!: FormGroup;
  @Output() eventEmitter = new EventEmitter<ActivityOutputMessage>();
  listeningList = signal<GrammarList[]>(
    JSON.parse(JSON.stringify(grammarListExample))
  );
  activityName = Activities.LISTENING;

  ngOnInit(): void {}

  submit() {
    const message: ActivityOutputMessage = {
      activity: Activities.READING,
      type: ActivityMessageType.DONE,
    };
    this.eventEmitter.emit(message);
  }

  ngOnDestroy(): void {}
}
