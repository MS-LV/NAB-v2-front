import { Component, Inject, OnInit, signal } from '@angular/core';

import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {
  Ranger,
  SettingConfig,
  SETTING_CONFIG,
  SETTING_CONFIG_TOKEN,
} from './setting.configs';
import { interval } from 'rxjs';
import { formFieldsData, formGroupData } from './setting.data';

interface FormField {
  id: number;
  label: string;
  type: string;
  inputMode: string;
  formControlName: string;
  config: Ranger;
  placeholder: string;
  prefix: string;
  suffix: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [{ provide: SETTING_CONFIG_TOKEN, useValue: SETTING_CONFIG }],
})
export class SettingComponent implements OnInit {
  formGroup = signal<FormGroup>(formGroupData);
  formFields = signal<FormField[]>(formFieldsData);
  hidePassword = signal(false);

  constructor(@Inject(SETTING_CONFIG_TOKEN) public config: SettingConfig) {}

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      // console.log('interval: ', this.formGroup().get('specialPassword')?.hasError('minlength'));
    });
  }
  onSubmit(): void {
    console.log('form value: ', this.formGroup().value);
  }
  passwordVisibility() {
    this.hidePassword.update(v => !v);
  }
}
