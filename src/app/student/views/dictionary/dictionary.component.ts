import {
  Component,
  signal,
  OnInit,
  ViewChild,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleCasePipe, JsonPipe } from '@angular/common';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';
import { DictionaryDialogComponent } from '@student_views/dictionary/dictionary-dialog/dictionary-dialog.component';
import {
  DictionaryList,
  dictionaryList,
} from '@student_views/dictionary/dictionary.interface';

@Component({
  selector: 'view-dictionary',
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
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
})
export class DictionaryComponent implements OnInit, OnDestroy {
  @ViewChild(MatStepper) stepper!: MatStepper;
  formGroup: FormGroup = new FormGroup({
    dictionary: new FormArray([]),
  });
  dictionaryList = signal<DictionaryList[]>(dictionaryList);

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.formInit();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    data: DictionaryList[]
  ): void {
    this.dialog.open(DictionaryDialogComponent, {
      minWidth: '200px',
      enterAnimationDuration,
      exitAnimationDuration,
      data,
    });
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
    console.log(event);
    this.stepper.next();
  }

  onFormSubmit() {
    this.openDialog('300ms', '100ms', this.dictionaryList());
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

  private formInit() {
    const dictionaries = this.formGroup.get('dictionary') as FormArray;
    this.dictionaryList().forEach(question => {
      dictionaries.push(
        new FormControl(question.answer, [Validators.required])
      );
    });
  }
  ngOnDestroy() {
    this.dictionaryList.set([]);
    this.formGroup = new FormGroup({
      dictionary: new FormArray([]),
    });
  }
}
