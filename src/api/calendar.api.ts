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
          date: now - 1000 * 60 * 60 * 24 * 2,
          doctor: 3,
        },
        {
          date: now + 1000 * 60 * 60 * 24 * 2,
          doctor: 1,
        },
        {
          date: now + 1000 * 60 * 60 * 24 * 4,
          doctor: 5,
        },
      ]);
    });
  });
};
