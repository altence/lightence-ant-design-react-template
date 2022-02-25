import { ActivityStatusType } from '@app/interfaces/interfaces';

interface ActivityStatusItem {
  name: ActivityStatusType;
  title: string;
  color: 'success' | 'warning' | 'secondary';
}

export const activityStatuses: ActivityStatusItem[] = [
  {
    name: 'sold',
    title: 'nft.status.sold',
    color: 'success',
  },
  {
    name: 'added',
    title: 'nft.status.added',
    color: 'warning',
  },
  {
    name: 'booked',
    title: 'nft.status.booked',
    color: 'secondary',
  },
];
