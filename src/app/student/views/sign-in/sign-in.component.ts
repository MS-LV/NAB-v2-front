import { Component, OnInit, signal } from '@angular/core';

import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDividerModule
  ],
})
export class SignInComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  emailTypes = signal([
    {
      name: 'Gmail',
      value: '@gmail.com'
    },
    {
      name: 'Email',
      value: '@email.ru'
    }
  ]);
  emailField = signal(this.formGroup.get('email')!.value ? this.formGroup.get('email')!.value!.match(new RegExp(/^\w+/)) as string[] : ['']);

  ngOnInit() {
    console.log(this.formGroup.get('email')!.value);
    
  }
  onSubmit(): void {
    alert('Thanks!');
  }
}
