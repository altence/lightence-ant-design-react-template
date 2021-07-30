class Dates {
  today: Date = new Date();

  months: string[] = [
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

  wDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat'];

  getToday(): Date {
    return this.today;
  }

  getMonths(): string[] {
    return this.months;
  }

  getWDays(): string[] {
    return this.wDays;
  }
}

export const dates = new Dates();
