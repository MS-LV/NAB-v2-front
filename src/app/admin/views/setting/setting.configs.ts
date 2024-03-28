import { InjectionToken } from '@angular/core';

export interface Ranger {
  min: number;
  max: number;
}

export interface SettingConfig {
  dictionaryTime: Ranger;
  testingTime: Ranger;
  writingSymbolLength: Ranger;
  dictionaryPassingScore: Ranger;
  testingPassingScore: Ranger;
  blockQuizeTime: Ranger;
  listeningAutioReplay: Ranger;
  specialPassword: Ranger;
}

export const SETTING_CONFIG: SettingConfig = {
  dictionaryTime: {
    min: 10,
    max: 30,
  },
  testingTime: {
    min: 20,
    max: 70,
  },
  writingSymbolLength: {
    min: 150,
    max: 300,
  },
  dictionaryPassingScore: {
    min: 20,
    max: 60,
  },
  testingPassingScore: {
    min: 50,
    max: 100,
  },
  blockQuizeTime: {
    min: 6,
    max: 24,
  },
  listeningAutioReplay: {
    min: 1,
    max: 10,
  },
  specialPassword: {
    min: 6,
    max: 12,
  },
};

export const SETTING_CONFIG_TOKEN = new InjectionToken<SettingConfig>(
  'setting.config',
  {
    factory: () => SETTING_CONFIG,
  }
);
