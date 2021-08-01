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

  static getToday(): Date {
    return new Date();
  }

  static getMonths(): string[] {
    return this.months;
  }

  static getDays(): string[] {
    return this.days;
  }
}
