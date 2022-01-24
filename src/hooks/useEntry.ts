import { useEffect } from 'react';
import { setNightMode, setNightTime } from '@app/store/slices/nightModeSlice';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { setTheme } from '@app/store/slices/themeSlice';
import { ThemeType } from '@app/interfaces/interfaces';

const DEFAULT_NIGHT_MODE_INTERVAL = [20 * 3600 * 1000, 8 * 3600 * 1000];

const currentNightMode = localStorage.getItem('nightMode') === 'true';
const currentNightTimeJSON = localStorage.getItem('nightTime');
const currentNightTime: number[] = currentNightTimeJSON
  ? (JSON.parse(currentNightTimeJSON) as number[])
  : DEFAULT_NIGHT_MODE_INTERVAL;

const currentTheme = (localStorage.getItem('theme') as ThemeType) || 'dark';

export const useEntry = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNightMode(currentNightMode));
    dispatch(setNightTime(currentNightTime));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setTheme(currentTheme));
  }, [dispatch]);
};
