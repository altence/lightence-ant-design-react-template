import { GermanyFlag } from 'components/common/icons/GermanyFlag';
import { UKFlag } from 'components/common/icons/UKFlag';

interface Language {
  id: number;
  name: string;
  icon: React.FC;
}

export const languages: Language[] = [
  {
    id: 1,
    name: 'English',
    icon: UKFlag,
  },
  {
    id: 2,
    name: 'Deutsch',
    icon: GermanyFlag,
  },
];
