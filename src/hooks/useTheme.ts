import { useEffect, useState, useCallback, useMemo } from 'react';
import { Dates } from '@app/constants/Dates';
import { ThemeType } from '@app/interfaces/interfaces';

const getStartDate = (nightTime: number[]) => {
  const clearDate = Dates.getClearDate();
  const now = Dates.getToday();

  let startDate = clearDate.add(nightTime[0], 'ms');
  startDate = startDate.isAfter(now) ? startDate : startDate.add(1, 'day');

  return startDate;
};

const getEndDate = (nightTime: number[]) => {
  const clearDate = Dates.getClearDate();

  const endTimeOffset = nightTime[0] < nightTime[1] ? nightTime[1] : nightTime[1] + 24 * 3600 * 1000;
  const endDate = clearDate.add(endTimeOffset, 'ms');

  return endDate;
};

const isNight = (nightTime: number[]) => {
  const startTime = getStartDate(nightTime);
  const endTime = getEndDate(nightTime);

  const now = Dates.getToday();

  return now.isBetween(startTime, endTime, null, '[)');
};

export const defaultTheme: ThemeType = (localStorage.getItem('theme') as ThemeType) || 'dark';

let timeoutId: null | ReturnType<typeof setTimeout> = null;

export const useTheme = (isNightMode: boolean, nightTime: number[]): [ThemeType, (theme: ThemeType) => void] => {
  const [theme, setTheme] = useState(defaultTheme);

  const selectTheme = useCallback((newTheme: ThemeType): void => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }, []);

  const timeToChange = useMemo(() => {
    const startDate = getStartDate(nightTime);
    const endDate = getEndDate(nightTime);
    const now = Dates.getToday();

    return isNight(nightTime) ? endDate.diff(now) : startDate.diff(now);
  }, [nightTime]);

  const checkNightMode = useCallback(() => {
    if (isNightMode) {
      const setTheme = () => selectTheme(isNight(nightTime) ? 'dark' : 'light');

      setTheme();

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      console.log(`setted timeout in ${timeToChange} `);

      timeoutId = setTimeout(() => {
        checkNightMode();
      }, timeToChange);
    }
  }, [isNightMode, nightTime, selectTheme, timeToChange]);

  useEffect(() => {
    checkNightMode();
  }, [checkNightMode]);

  return [theme, selectTheme];
};
