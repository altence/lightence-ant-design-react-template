import { GermanyFlag } from 'components/common/icons/GermanyFlag';
import { UKFlag } from 'components/common/icons/UKFlag';

interface Language {
  id: number;
  value: string;
  name: string;
  icon: React.FC;
}

export const languages: Language[] = [
  {
    id: 1,
    value: 'en',
    name: 'English',
    icon: UKFlag,
  },
  {
    id: 2,
    value: 'de',
    name: 'Deutsch',
    icon: GermanyFlag,
  },
];
