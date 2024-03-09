import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { GrammarList } from '@student_views/testing/components/grammar/grammar.interface';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import {
  Activities,
  ActivityMessageType,
} from '@student_views/testing/testing.constants';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';
import { MatIconModule } from '@angular/material/icon';
import { textCompare } from '@/Utils/text.utils';

@Component({
  selector: 'comp-question-form',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    TitleCasePipe,
    MatRadioModule,
    MatIconModule,
    QuestionFormComponent,
    AutoFocusDirective,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: true, showError: true },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.scss',
})
export class QuestionFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() activityName!: Activities;
  @Input() questionList!: GrammarList[];
  @Output() eventEmitter = new EventEmitter<ActivityOutputMessage>();
  @ViewChild(MatStepper) stepper!: MatStepper;

  formArray = signal<FormArray>(new FormArray([new FormControl('')]));

  ngOnInit(): void {
    this.formInit();
    this.formArray().reset();
  }

  onFormSubmit() {
    const message: ActivityOutputMessage = {
      activity: Activities.GRAMMAR,
      type: ActivityMessageType.DONE,
    };
    this.eventEmitter.emit(message);
  }
  onNextClick() {}

  errorMessage(index: number) {
    const answer = this.formArray().get('' + index)!.value;
    const trueAnswer = this.questionList[index].trueAnswer;
    
    if (!answer) {
      return false;
    }
    console.log('checkAnswer', !!textCompare(answer, trueAnswer));
    // console.log(answer, trueAnswer);
    
    return !textCompare(answer, trueAnswer);
  }

  checkAnswer() {}

  private formInit() {
    const formArray = this.formGroup.get(this.activityName) as FormArray;
    this.formArray.set(formArray);
    this.questionList.forEach((question: GrammarList) => {
      this.formArray.update(value => {
        value.push(new FormControl(question.answer, [Validators.required]));
        return value;
      });
    });
  }

  ngOnDestroy(): void {
    this.formGroup.reset();
    this.formArray().reset();
    console.log('ngOnDestroy grammar');
  }
}
