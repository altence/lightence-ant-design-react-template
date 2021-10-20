import { BadgeType } from 'components/common/Badge/Badge';

interface NotificationSeverity {
  id: number;
  name: BadgeType;
}

export const notificationsSeverities: NotificationSeverity[] = [
  {
    id: 0,
    name: 'default',
  },
  {
    id: 1,
    name: 'success',
  },
  {
    id: 2,
    name: 'warning',
  },
  {
    id: 3,
    name: 'error',
  },
];
