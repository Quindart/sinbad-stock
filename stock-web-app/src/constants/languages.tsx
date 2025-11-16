export interface Language {
  code: string;
  flag: string;
}

export const AVAILABLE_LANGUAGE: Language[] = [
  { code: 'en', flag: '/assets/flags/en-US.svg' }, // English
  { code: 'vi', flag: '/assets/flags/vi-VN.svg' }, // Vietnamese
];
