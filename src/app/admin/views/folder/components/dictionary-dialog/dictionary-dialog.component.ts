import { Component, signal, OnInit } from '@angular/core';

import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { dictionaryList } from '@student_views/dictionary/dictionary.interface';
import { generatorID } from '@/Utils/text.utils';
import { DictionaryDialogService } from './dictionary-dialog.service';
@Component({
  selector: 'app-dictionary-dialog',
  templateUrl: './dictionary-dialog.component.html',
  styleUrl: './dictionary-dialog.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [DictionaryDialogService],
})
export class DictionaryDialogComponent implements OnInit {
  formGroup = signal<FormGroup>(new FormGroup({}));
  formQuestionList = signal<FormGroup[]>([]);

  constructor(
    private fb: FormBuilder,
    private service: DictionaryDialogService
  ) {}
  ngOnInit(): void {
    this.formGroupInit();
    this.formQuestionList.set(
      (this.formGroup().get('questionList') as FormArray)
        .controls as FormGroup[]
    );
  }

  handleFileInputChange(input: HTMLInputElement): void {
    const fileList = input.files;
    if (!fileList) {
      return;
    }
    this.service.excelFormGroup(fileList[0]).subscribe((value: FormGroup[]) => {
      const formArray = this.formGroup().get('questionList') as FormArray;
      value.forEach((control: FormGroup) => {
        formArray.push(control);
      });
    });

    this.formGroup().get('questionList');
    const fileName = fileList[0].name;
    this.formGroup().get('fileName')?.patchValue(fileName);
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
