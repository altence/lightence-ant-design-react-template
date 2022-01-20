import { useEffect, useState, useCallback } from 'react';
import { Dates } from '../constants/Dates';

export const defaultTheme = localStorage.getItem('theme') || 'dark';

export const useTheme = (isNightMode: boolean, nightTime: number[]): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState(defaultTheme);

  const selectTheme = (theme: string): void => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const checkNightMode = useCallback(() => {
    if (isNightMode) {
      selectTheme(isNight(nightTime) ? 'dark' : 'light');
    }
  }, [isNightMode, nightTime]);

  useEffect(() => {
    checkNightMode();
  }, [isNightMode, nightTime, checkNightMode]);

  useEffect(() => {
    const id = setInterval(checkNightMode, 60 * 1000);

    return () => clearInterval(id);
  }, [checkNightMode]);

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
