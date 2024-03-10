import { Component, Input, Output, EventEmitter, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import { grammarListExample, GrammarList } from '@student_views/testing/components/grammar/grammar.interface';
import { Activities, ActivityMessageType } from '@student_views/testing/testing.constants';
import { QuestionFormComponent } from '@student_views/testing/components/question-form/question-form.component';

@Component({
  selector: 'comp-reading',
  standalone: true,
  imports: [QuestionFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.scss',
})
export class ReadingComponent {
  @Input() formGroup!: FormGroup;
  @Output() eventEmitter = new EventEmitter<ActivityOutputMessage>();
  readingList = signal<GrammarList[]>(JSON.parse(JSON.stringify(grammarListExample)));
  activityName = Activities.READING;

  ngOnInit(): void {
  }

  submit() {
    const message: ActivityOutputMessage = {
      activity: Activities.READING,
      type: ActivityMessageType.DONE,
    };
    this.eventEmitter.emit(message);
  }
  ngOnDestroy(): void {
  }
}
