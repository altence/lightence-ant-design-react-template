import { AppDate } from '../constants/Dates';
import { getNumberFromTime } from './getNumberFromTime';

export const getTheme = (startTime: AppDate, endTime: AppDate, currentTime: AppDate): string => {
  const startTimeNumber = getNumberFromTime(startTime);
  const endTimeNumber = getNumberFromTime(endTime);
  const currentTimeNumber = getNumberFromTime(currentTime);

  if (startTimeNumber - endTimeNumber > 0) {
    if (currentTimeNumber > startTimeNumber && currentTimeNumber < 2400) {
      return 'dark';
    } else if (currentTimeNumber < endTimeNumber && currentTimeNumber >= 0) {
      return 'dark';
    } else {
      return 'light';
    }
  } else {
    if (currentTimeNumber > startTimeNumber && currentTimeNumber < endTimeNumber) {
      return 'dark';
    } else {
      return 'light';
    }
  }
};
