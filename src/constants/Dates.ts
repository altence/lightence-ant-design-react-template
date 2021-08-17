import dayjs, { Dayjs } from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(LocalizedFormat);

export type AppDate = Dayjs;

export class Dates {
  static months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  static days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat'];

  static getToday(): string {
    return dayjs().format('L');
  }

  static getMonths(): string[] {
    return this.months;
  }

  static getDays(): string[] {
    return this.days;
  }

  static format(date: AppDate | string | number, query: string): string {
    if (typeof date === 'string' || typeof date === 'number') {
      return dayjs(date).format(query);
    } else {
      return date.format(query);
    }
  }
}
