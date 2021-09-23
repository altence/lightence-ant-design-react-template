import { AppDate, Dates } from '../constants/Dates';

export const getNumberFromTime = (date: AppDate): number => {
  const formattedDate = Dates.format(date, 'HH:mm');

  return parseInt(formattedDate.replace(':', ''), 0);
};
