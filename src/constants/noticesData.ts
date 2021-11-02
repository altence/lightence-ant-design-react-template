import { RoutesEnum } from './navigation';

export interface Message {
  id: number;
  description: string;
}

export interface Mention extends Message {
  userName: string;
  userIcon: string;
  place: string;
  href: string;
}

export type Notice = Mention | Message;

export const noticesData: Notice[] = [
  {
    id: 2,
    description: 'header.notices.loginAttempt',
  },
  {
    id: 1,
    description: 'header.notices.successPayment',
  },
  {
    id: 3,
    description: 'header.notices.serverError',
  },
  {
    id: 4,
    description: 'header.notices.mention',
    userName: 'Steve Manson',
    userIcon:
      'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
    place: 'dashboard.latestScreenings.title',
    href: `${RoutesEnum.DASHBOARD_PAGE}#latest-screenings`,
  },
];
