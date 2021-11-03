import { NotificationType } from 'components/common/Notification/Notification';

interface NotificationSeverity {
  id: number;
  name: NotificationType;
}

export const notificationsSeverities: NotificationSeverity[] = [
  {
    id: 0,
    name: 'info',
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
  {
    id: 4,
    name: 'mention',
  },
];
