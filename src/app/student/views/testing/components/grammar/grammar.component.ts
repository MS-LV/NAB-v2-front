import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  OnInit,
  OnDestroy,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ActivityMessageType,
  Activities,
} from '@student_views/testing/testing.constants';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import {
  GrammarList,
  grammarListExample,
} from '@student_views/testing/components/grammar/grammar.interface';
import { QuestionFormComponent } from '@student_views/testing/components/question-form/question-form.component';
import {
  TESTING_CONFIG_TOKEN,
  TestingConfig,
  TESTING_CONFIG,
} from '@student_views/testing/testing.config';
@Component({
  selector: 'com-grammar',
  standalone: true,
  imports: [QuestionFormComponent],
  providers: [{ provide: TESTING_CONFIG_TOKEN, useValue: TESTING_CONFIG }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss',
})
export class GrammarComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @Output() eventEmitter = new EventEmitter<ActivityOutputMessage>();
  grammarList = signal<GrammarList[]>(
    JSON.parse(JSON.stringify(grammarListExample))
  );
  activityName = Activities.GRAMMAR;

  constructor(@Inject(TESTING_CONFIG_TOKEN) config: TestingConfig) {
    console.log(config);
  }

  ngOnInit(): void {}

  submit() {
    const message: ActivityOutputMessage = {
      activity: Activities.GRAMMAR,
      type: ActivityMessageType.DONE,
    };
    this.eventEmitter.emit(message);
  }

  ngOnDestroy(): void {}
}
