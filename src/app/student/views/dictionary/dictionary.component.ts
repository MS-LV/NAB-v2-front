import { Component, signal, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleCasePipe, JsonPipe } from '@angular/common';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {AutoFocusDirective} from '@student_directives/auto-focus.directive'

interface QuestionList {
  id: number;
  answer: string;
  english: string;
  russian: string;
  tajik: string;
}

const list: QuestionList[] = [
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
  {
    id: 1,
    answer: '',
    english: 'Beautiful',
    russian: 'Красивая',
    tajik: 'зебо',
  },
  {
    id: 2,
    answer: '',
    english: 'Lower',
    russian: 'Низкий',
    tajik: 'Паст',
  },
  {
    id: 3,
    answer: '',
    english: 'Go Up',
    russian: 'поднымация',
    tajik: 'Боло Баромадан',
  },
  {
    id: 4,
    answer: '',
    english: 'go down',
    russian: 'Впусткация',
    tajik: 'Фаромадан',
  },
];

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
    MatDividerModule
  ],
  providers: [],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
})
export class DictionaryComponent implements OnInit, OnDestroy {
  @ViewChild(MatStepper) stepper!: MatStepper;
  formGroup: FormGroup = new FormGroup({
    dictionaries: new FormArray([]),
  });
  questionsList = signal<QuestionList[]>(list);

  constructor() {}

  ngOnInit() {
    const dictionaries = this.formGroup.get('dictionaries') as FormArray;
    this.questionsList().forEach(question => {
      dictionaries.push(
        new FormControl(question.answer, [Validators.required])
      );
    });
  }

  input(event: Event, question: QuestionList) {
    const value = (event.target as HTMLInputElement).value;
    question.answer = value;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    
  }
  onInputEnter() {
    this.stepper.next();
  }

  submit() {
    console.log('submit: ', this.formGroup.valid);
  }

  isValidField(index: number) {
    const isValid =
      this.formGroup
        .get('dictionaries')!
        .get('' + index)!
        .hasError('required') &&
      this.formGroup.get('dictionaries')!.get('' + index)!.touched;
    return isValid;
  }

  ngOnDestroy() {
    this.questionsList.set([]);
    this.formGroup = new FormGroup({
      dictionaries: new FormArray([]),
    });
  }
}
