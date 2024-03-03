import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivityMessageType, Activities} from '@student_views/testing/testing.constants';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import {GrammarList, grammarListExample } from '@student_views/testing/components/grammar/grammar.interface';
import { QuestionFormComponent } from '@student_views/testing/components/question-form/question-form.component';
@Component({
  selector: 'com-grammar',
  standalone: true,
  imports: [
    QuestionFormComponent
  ],
  providers: [],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss',
})
export class GrammarComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @Output() eventEmitter = new EventEmitter<ActivityOutputMessage>();
  grammarList = signal<GrammarList[]>(grammarListExample);
  activityName = Activities.GRAMMAR;

  ngOnInit(): void {
  }

  submit() {
    const message: ActivityOutputMessage = {
      activity: Activities.GRAMMAR,
      type: ActivityMessageType.DONE,
    };
    this.eventEmitter.emit(message);
    // this.stepper.;
    console.log(this.formGroup.get('grammar')!.value);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy grammar');
  }
}
