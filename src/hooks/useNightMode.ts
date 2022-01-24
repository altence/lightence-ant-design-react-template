import {
  setNightMode as setNightModeAction,
  setNightTime as setNightTimeAction,
} from '@app/store/slices/nightModeSlice';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';

const DEFAULT_NIGHT_MODE_INTERVAL = [20 * 3600 * 1000, 8 * 3600 * 1000];

const currentNightMode = localStorage.getItem('nightMode') === 'true';
const currentNightTimeJSON = localStorage.getItem('nightTime');
const currentNightTime: number[] = currentNightTimeJSON
  ? (JSON.parse(currentNightTimeJSON) as number[])
  : DEFAULT_NIGHT_MODE_INTERVAL;

interface UseNightModeReturnValue {
  isNightMode: boolean;
  setNightMode: (isNightMode: boolean) => void;
  nightTime: number[];
  setNightTime: (nightTime: number[]) => void;
}

export const useNightMode = (): UseNightModeReturnValue => {
  const dispatch = useAppDispatch();

  const nightModeState = useAppSelector((state) => state.nightMode);
  const isNightMode = nightModeState.isNightMode;
  const nightTime = nightModeState.nightTime;

  useEffect(() => {
    dispatch(setNightModeAction(currentNightMode));
    dispatch(setNightTimeAction(currentNightTime));
  }, [dispatch]);

  const setNightMode = useCallback(
    (isNightMode: boolean) => {
      dispatch(setNightModeAction(isNightMode));
      localStorage.setItem('nightMode', JSON.stringify(isNightMode));
      localStorage.setItem('nightTime', JSON.stringify(nightTime));
    },
    [dispatch, nightTime],
  );

  const setNightTime = useCallback(
    (nightTime: number[]) => {
      dispatch(setNightTimeAction(nightTime));
      localStorage.setItem('nightTime', JSON.stringify(nightTime));
    },
    [dispatch],
  );

  return {
    isNightMode,
    nightTime,
    setNightMode,
    setNightTime,
  };
};
