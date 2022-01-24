import { useCallback, useEffect, useMemo } from 'react';
import { setTheme } from '@app/store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Dates } from '@app/constants/Dates';
import { ThemeType } from '@app/interfaces/interfaces';

const getStartDate = (nightTime: number[]) => {
  const clearDate = Dates.getClearDate();

  return clearDate.add(nightTime[0], 'ms');
};

const getEndDate = (nightTime: number[]) => {
  const clearDate = Dates.getClearDate();
  const endTimeOffset = nightTime[0] < nightTime[1] ? nightTime[1] : nightTime[1] + 24 * 3600 * 1000;

  return clearDate.add(endTimeOffset, 'ms');
};

const isNight = (nightTime: number[]) => {
  const startTime = getStartDate(nightTime);
  const endTime = getEndDate(nightTime);

  const now = Dates.getToday();

  return now.isBetween(startTime, endTime, null, '[)');
};

let timeoutId: null | ReturnType<typeof setTimeout> = null;

export const useNightMode = (): void => {
  const dispatch = useAppDispatch();
  const nightModeState = useAppSelector((state) => state.nightMode);
  const isNightMode = nightModeState.isNightMode;
  const nightTime = nightModeState.nightTime;

  const selectTheme = useCallback(
    (newTheme: ThemeType): void => {
      dispatch(setTheme(newTheme));
      localStorage.setItem('theme', newTheme);
    },
    [dispatch],
  );

  const timeToChange = useMemo(() => {
    const startDate = getStartDate(nightTime);
    const endDate = getEndDate(nightTime);
    const now = Dates.getToday();

    if (isNight(nightTime)) {
      return endDate.diff(now);
    } else {
      return startDate.isAfter(now) ? startDate.diff(now) : startDate.add(1, 'day').diff(now);
    }
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
};
