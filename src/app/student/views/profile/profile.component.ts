import { Component, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    ClipboardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  formGroup = new FormGroup({
    firstName: new FormControl('First Name', [Validators.required]),
    lastName: new FormControl('Second', [Validators.required]),
    email: new FormControl('glaroev@gmail.com', [Validators.required, Validators.email]),
    description: new FormControl('Description about student')
  });
  emailTypes = signal([
    {
      name: 'Gmail',
      value: '@gmail.com',
    },
    {
      name: 'Email',
      value: '@email.ru',
    },
  ]);
  emailField = signal(['']);
  isReadOnly = signal(true);

  onEmailInput(): void {
    const email = this.formGroup.get('email')!.value;
    if (!email) {
      this.emailField.set(['']);
      return;
    }
    const emailName = this.formGroup
      .get('email')!
      .value!.match(new RegExp(/^\w+/)) as string[];
    this.emailField.set(emailName);
  }
}
