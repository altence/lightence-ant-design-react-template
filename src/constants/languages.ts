interface Language {
  id: number;
  name: string;
  countryCode: string;
}

export const languages: Language[] = [
  {
    id: 1,
    name: 'English',
    countryCode: 'GB',
  },
  {
    id: 2,
    name: 'Deutsch',
    countryCode: 'DE',
  },
];
