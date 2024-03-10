import {
  Component,
  Input,
  ViewChild,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleCasePipe, JsonPipe } from '@angular/common';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';
import {
  DictionaryList,
  dictionaryList,
} from '@student_views/dictionary/dictionary.interface';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import {
  Activities,
  ActivityMessageType,
} from '@student_views/testing/testing.constants';
import { textCompare } from '@/Utils/text.utils';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'comp-dictionary',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TitleCasePipe,
    JsonPipe,
    AutoFocusDirective,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
})
export class DictionaryComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @Output() eventEmitter = new EventEmitter<ActivityOutputMessage>();
  @ViewChild(MatStepper) stepper!: MatStepper;
  dictionaryList = signal<DictionaryList[]>(dictionaryList);
  formArray = signal<FormArray>(new FormArray([new FormControl()]));

  ngOnInit() {
    this.formInit();
  }

  input(event: Event, question: DictionaryList) {
    const value = (event.target as HTMLInputElement).value;
    question.answer = value;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  onInputEnter(event: Event, index: number) {
    const currentField = this.formGroup.get('dictionary')!.get('' + index);
    const isFieldValid = currentField!.hasError('required');

    if (isFieldValid) {
      event.preventDefault();
      currentField!.markAsTouched();

      return;
    }
    this.stepper.next();
  }

  onFormSubmit() {
    const message: ActivityOutputMessage = {
      activity: Activities.DICTIONARY,
      type: ActivityMessageType.DONE,
    };
    this.eventEmitter.emit(message);
  }

  isValidField(index: number): boolean {
    const isValid =
      this.formGroup
        .get('dictionary')!
        .get('' + index)!
        .hasError('required') &&
      this.formGroup.get('dictionary')!.get('' + index)!.touched;
    return isValid;
  }
  errorMessage(index: number) {
    const answer = this.formArray().get('' + index)!.value;
    const trueAnswer = this.dictionaryList()[index].english;
    if (!answer) {
      return false;
    }

    return !textCompare(answer, trueAnswer);
  }
  private formInit() {
    const dictionaries = this.formGroup.get('dictionary') as FormArray;
    this.formArray.set(dictionaries);
    this.dictionaryList().forEach((question: DictionaryList) => {
      dictionaries.push(
        new FormControl(question.answer, [Validators.required])
      );
    });
  }
  ngOnDestroy() { }
}
