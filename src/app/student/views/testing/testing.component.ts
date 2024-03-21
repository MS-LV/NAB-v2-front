import {
  Component,
  OnInit,
  ViewChild,
  signal,
  ElementRef,
} from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleCasePipe, JsonPipe } from '@angular/common';
import { AutoFocusDirective } from '@student_directives/auto-focus.directive';
import { DictionaryComponent } from '@student_views/testing/components/dictionary/dictionary.component';
import { GrammarComponent } from '@student/views/testing/components/grammar/grammar.component';
import { ListeningComponent } from '@student/views/testing/components/listening/listening.component';
import { ReadingComponent } from '@student/views/testing/components/reading/reading.component';
import { WritingComponent } from '@student/views/testing/components/writing/writing.component';
import { Activities } from '@student/views/testing/testing.constants';

@Component({
  selector: 'view-testing',
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
    DictionaryComponent,
    GrammarComponent,
    ListeningComponent,
    ReadingComponent,
    WritingComponent,
  ],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss',
})
export class TestingComponent implements OnInit {
  @ViewChild(MatStepper) stepper!: MatStepper;
  formGroup: FormGroup = new FormGroup({
    [Activities.GRAMMAR]: new FormArray([], [Validators.required]),
    [Activities.READING]: new FormArray([], [Validators.required]),
    [Activities.LISTENING]: new FormArray([], [Validators.required]),
    [Activities.DICTIONARY]: new FormArray([], [Validators.required]),
    [Activities.WRITING]: new FormGroup({
      theme: new FormControl(null, [Validators.required]),
      assay: new FormControl('', [Validators.required]),
    }),
  });

  activities = signal([]);

  grammarActivity = GrammarComponent;
  constructor(private element: ElementRef) {}

  ngOnInit() {}

  submitTest(_: any) {
    this.stepper.next();
    this.scrollElement();
    console.log('submit: ', this.formGroup.value);
  }

  onFormSubmit() {}

  private scrollElement() {
    setTimeout(() => {
      const elem = this.element.nativeElement as HTMLElement;
      elem.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, 300);
  }
}
