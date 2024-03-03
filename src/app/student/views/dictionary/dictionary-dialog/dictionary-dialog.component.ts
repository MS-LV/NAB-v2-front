import { Component, Inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DictionaryList } from '@student_views/dictionary/dictionary.interface';

@Component({
  selector: 'app-dictionary-dialog',
  standalone: true,
  imports: [TitleCasePipe, MatDialogModule],
  templateUrl: './dictionary-dialog.component.html',
  styleUrl: './dictionary-dialog.component.scss',
})
export class DictionaryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public questionList: DictionaryList[]) {}
}
