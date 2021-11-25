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

export type Notification = Mention | Message;

export const getNotifications = (): Promise<Notification[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
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
          userName: 'Steve Manson',
          userIcon:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
          place: 'dashboard.latestScreenings.title',
          href: `/#latest-screenings`,
        },
      ]);
    }, 1000);
  });
};
