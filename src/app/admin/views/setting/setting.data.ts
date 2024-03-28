import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SETTING_CONFIG } from './setting.configs';

export const formGroupData = new FormGroup({
  dictionaryTime: new FormControl(0, [
    Validators.min(SETTING_CONFIG.dictionaryTime.min),
    Validators.max(SETTING_CONFIG.dictionaryTime.max),
  ]),
  dictionaryPassingScore: new FormControl(0, [
    Validators.min(SETTING_CONFIG.dictionaryPassingScore.min),
    Validators.max(SETTING_CONFIG.dictionaryPassingScore.max),
  ]),
  testingTime: new FormControl(0, [
    Validators.min(SETTING_CONFIG.testingTime.min),
    Validators.max(SETTING_CONFIG.testingTime.max),
  ]),
  testingPassingScore: new FormControl(0, [
    Validators.min(SETTING_CONFIG.testingPassingScore.min),
    Validators.max(SETTING_CONFIG.testingPassingScore.max),
  ]),
  writingSymbolLength: new FormControl(0, [
    Validators.min(SETTING_CONFIG.writingSymbolLength.min),
    Validators.max(SETTING_CONFIG.writingSymbolLength.max),
  ]),
  blockQuizeTime: new FormControl(0, [
    Validators.min(SETTING_CONFIG.blockQuizeTime.min),
    Validators.max(SETTING_CONFIG.blockQuizeTime.max),
  ]),
  listeningAudioReplay: new FormControl(0, [
    Validators.min(SETTING_CONFIG.listeningAutioReplay.min),
    Validators.max(SETTING_CONFIG.listeningAutioReplay.max),
  ]),
  specialPassword: new FormControl('', [
    Validators.minLength(SETTING_CONFIG.specialPassword.min),
    Validators.maxLength(SETTING_CONFIG.specialPassword.max),
    Validators.required,
  ]),
});

export const formFieldsData = [
  {
    id: 1,
    label: 'Dictionary Time',
    type: 'number',
    inputMode: 'numeric',
    formControlName: 'dictionaryTime',
    config: SETTING_CONFIG.dictionaryTime,
    placeholder: '0',
    prefix: 'schedule',
    suffix: 'min',
  },
  {
    id: 2,
    label: 'Dictionary passing score',
    type: 'number',
    inputMode: 'numeric',
    formControlName: 'dictionaryPassingScore',
    config: SETTING_CONFIG.dictionaryPassingScore,
    placeholder: '0',
    prefix: 'sports_score',
    suffix: 'ball',
  },
  {
    id: 3,
    label: 'Testing Time',
    type: 'number',
    inputMode: 'numeric',
    formControlName: 'testingTime',
    config: SETTING_CONFIG.testingTime,
    placeholder: '0',
    prefix: 'schedule',
    suffix: 'min',
  },
  {
    id: 4,
    label: 'Testing passing score',
    type: 'number',
    inputMode: 'numeric',
    formControlName: 'testingPassingScore',
    config: SETTING_CONFIG.testingPassingScore,
    placeholder: '0',
    prefix: 'sports_score',
    suffix: 'ball',
  },
  {
    id: 5,
    label: 'Writing Symbol Length',
    type: 'number',
    inputMode: 'numeric',
    formControlName: 'writingSymbolLength',
    config: SETTING_CONFIG.writingSymbolLength,
    placeholder: '0',
    prefix: 'emergency',
    suffix: '',
  },
  {
    id: 6,
    label: 'Block quize time',
    type: 'number',
    inputMode: 'numeric',
    formControlName: 'blockQuizeTime',
    config: SETTING_CONFIG.blockQuizeTime,
    placeholder: '0',
    prefix: 'block',
    suffix: 'hour',
  },
  {
    id: 7,
    label: 'Listening Audio Replay',
    type: 'number',
    inputMode: 'numeric',
    formControlName: 'listeningAudioReplay',
    config: SETTING_CONFIG.listeningAutioReplay,
    placeholder: '0',
    prefix: 'replay_5',
    suffix: 'times',
  },
];
