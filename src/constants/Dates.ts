import dayjs, { Dayjs } from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(LocalizedFormat);
dayjs.extend(localeData);

export type AppDate = Dayjs;

export class Dates {
  static getToday(): AppDate {
    return dayjs();
  }

  static getMonths(): string[] {
    return dayjs.months();
  }

  static getDays(): string[] {
    return dayjs.weekdaysShort();
  }

  static getDate(date: number): AppDate {
    return dayjs(date);
  }

  static format(date: AppDate | string | number, query: string): string {
    if (typeof date === 'string' || typeof date === 'number') {
      return dayjs(date).format(query);
    } else {
      return date.format(query);
    }
  }
}
