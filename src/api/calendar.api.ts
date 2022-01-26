import { Dates } from 'constants/Dates';

export interface CalendarEvent {
  date: number;
  doctor: number;
}

const now = Dates.getToday().valueOf();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getUserCalendar = (id: number): Promise<CalendarEvent[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          doctor: 5,
          date: now - 1000 * 60 * 60 * 24 * 5,
        },
        {
          doctor: 1,
          date: now - 1000 * 60 * 60 * 24 * 3,
        },
        {
          doctor: 2,
          date: now - 1000 * 60 * 60 * 24 * 10,
        },
        {
          doctor: 4,
          date: now - 1000 * 60 * 60 * 24 * 4,
        },
        {
          doctor: 6,
          date: now - 1000 * 60 * 60 * 24 * 16,
        },
        {
          date: now - 1000 * 60 * 60 * 24 * 2,
          doctor: 3,
        },
        {
          date: now + 60 * 60 * 1000,
          doctor: 2,
        },
        {
          date: now + 1000 * 60 * 60 * 24 * 2,
          doctor: 1,
        },
        {
          date: now + 1000 * 60 * 60 * 24 * 4,
          doctor: 5,
        },
        {
          date: now - 1000 * 60 * 60 * 24 * 3,
          doctor: 7,
        },
      ]);
    });
  });
};
