export interface Message {
  id: number;
  description: string;
}

export interface Mention extends Message {
  userId: number;
  place: string;
  href: string;
}

export type Notification = Mention | Message;

export const notifications = [
  {
    id: 2,
    description: 'header.notifications.loginAttempt',
  },
  {
    id: 1,
    description: 'header.notifications.successPayment',
  },
  {
    id: 3,
    description: 'header.notifications.serverError',
  },
  {
    id: 4,
    description: 'header.notifications.mention',
    userId: 1,
    place: 'dashboard.latestScreenings.title',
    href: `/#latest-screenings`,
  },
];
