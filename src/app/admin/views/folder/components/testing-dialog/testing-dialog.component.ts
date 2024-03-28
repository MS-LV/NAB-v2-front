import { Component, signal, OnInit } from '@angular/core';

import {
  ReactiveFormsModule,
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Activities } from '@student_views/testing/testing.constants';
import { dictionaryList } from '@student_views/dictionary/dictionary.interface';
import { generatorID } from '@/Utils/text.utils';

@Component({
  selector: 'app-testing-dialog',
  templateUrl: './testing-dialog.component.html',
  styleUrl: './testing-dialog.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
})
export class TestingDialogComponent implements OnInit {
  formGroup = signal<FormGroup>(
    new FormGroup({
      label: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      [Activities.GRAMMAR]: new FormGroup({
        fileName: new FormControl('', [Validators.required]),
        questionList: new FormArray([])
      }),
      [Activities.READING]: new FormGroup({
        fileName: new FormControl('', [Validators.required]),
        questionList: new FormArray([])
      }),
      [Activities.DICTIONARY]: new FormGroup({
        fileName: new FormControl('', [Validators.required]),
        questionList: new FormArray([])
      }),
      [Activities.LISTENING]: new FormGroup({
        fileName: new FormControl('', [Validators.required]),
        questionList: new FormArray([])
      })
    })
  );
  formQuestionList = signal<FormGroup[]>([]);

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroupInit();
    this.formQuestionList.set(
      (this.formGroup().get('questionList') as FormArray)
        .controls as FormGroup[]
    );
  }

  handleFileInputChange(input: HTMLInputElement): void {
    console.log('input: ', input);
  }
  onSubmit(): void {
    console.log(this.formGroup().value);
  }
  addFormField() {
    const newField = {
      id: generatorID(),
      tajik: ['', Validators.required],
      russian: ['', Validators.required],
      english: ['', Validators.required],
      answer: '',
    };
    const formArray = this.formGroup().get('questionList') as FormArray;
    formArray.push(this.fb.group(newField));
  }
  private formGroupInit() {
    const questionList: FormGroup[] = [];
    dictionaryList.forEach(dictionary => {
      questionList.push(
        this.fb.group({
          id: [dictionary.id],
          tajik: [dictionary.tajik, [Validators.required]],
          english: [dictionary.english, [Validators.required]],
          russian: [dictionary.russian, [Validators.required]],
        })
      );
    });
    this.formGroup.set(
      this.fb.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        fileName: ['', [Validators.required]],
        questionList: this.fb.array([], [Validators.required]),
      })
    );
    console.log('group: ', this.formGroup().get('questionList'));
  }
}
