import { useEffect, useState } from 'react';
import { Dates } from '../constants/Dates';

const selectedTheme = localStorage.getItem('theme');

export const useTheme = (isNightMode: boolean, nightTime: number[]): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState(selectedTheme || 'light');

  const selectTheme = (theme: string): void => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    if (isNightMode) {
      selectTheme(isNight(nightTime) ? 'dark' : 'light');
    }
  }, [isNightMode, nightTime]);

  return [theme, selectTheme];
};

const isNight = (nightTime: number[]) => {
  const clearDate = Dates.getToday().hour(0).minute(0).second(0).millisecond(0);

  const startTime = clearDate.add(nightTime[0], 'ms');

  const endTimeOffset = nightTime[0] < nightTime[1] ? nightTime[1] : nightTime[1] + 24 * 3600 * 1000;
  const endTime = clearDate.add(endTimeOffset, 'ms');

  const now = Dates.getToday();

  return now.isBetween(startTime, endTime, null, '[)');
};
