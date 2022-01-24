import { useEffect, useState, useCallback } from 'react';
import { Dates } from '@app/constants/Dates';
import { ThemeType } from '@app/interfaces/interfaces';

export const defaultTheme: ThemeType = (localStorage.getItem('theme') as ThemeType) || 'dark';

export const useTheme = (isNightMode: boolean, nightTime: number[]): [ThemeType, (theme: ThemeType) => void] => {
  const [theme, setTheme] = useState(defaultTheme);

  const selectTheme = useCallback(
    (newTheme: ThemeType): void => {
      if (theme !== newTheme) {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      }
    },
    [theme],
  );

  const checkNightMode = useCallback(() => {
    if (isNightMode) {
      selectTheme(isNight(nightTime) ? 'dark' : 'light');
    }
  }, [isNightMode, nightTime, selectTheme]);

  useEffect(() => {
    checkNightMode();
  }, [isNightMode, nightTime, checkNightMode]);

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
