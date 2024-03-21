import {
  Component,
  Input,
  Output,
  EventEmitter,
  Inject,
  signal,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivityOutputMessage } from '@student_views/testing/testing.interface';
import {
  TESTING_CONFIG_TOKEN,
  TESTING_CONFIG,
  TestingConfig,
} from '@student_views/testing/testing.config';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {
  Activities,
  ActivityMessageType,
} from '@student_views/testing/testing.constants';

@Component({
  selector: 'comp-writing',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [{ provide: TESTING_CONFIG_TOKEN, useValue: TESTING_CONFIG }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss',
})
export class WritingComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Output() eventEmitter = new EventEmitter<ActivityOutputMessage>();
  writingFormGroup = signal<FormGroup>(new FormGroup({}));
  writingThemes = signal<string[]>([
    'My favorite season',
    'I want to be ...',
    'My motherland',
  ]);

  constructor(@Inject(TESTING_CONFIG_TOKEN) config: TestingConfig) {
    console.log(config);
  }
  ngOnInit() {
    this.formInit();
  }
  submit() {
    const message: ActivityOutputMessage = {
      activity: Activities.WRITING,
      type: ActivityMessageType.DONE,
    };
    this.eventEmitter.emit(message);
  }
  private formInit() {
    const formGroup = this.formGroup.get(Activities.WRITING) as FormGroup;
    this.writingFormGroup.set(formGroup);
  }
}
