import { useEffect } from 'react';
import { setTheme } from '@app/store/slices/themeSlice';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Dates } from '@app/constants/Dates';

const getNextTime = (ms: number) => {
  const now = Date.now();
  const clearDate = Dates.getClearDate();
  const nextTime = clearDate.add(ms, 'ms');

  const delta = +nextTime - now;

  return delta < 0 ? delta + 24 * 3600 * 1000 : delta;
};

let timeoutNightStarts: null | ReturnType<typeof setTimeout> = null;
let timeoutNightEnds: null | ReturnType<typeof setTimeout> = null;

export const useAutoNightMode = (): void => {
  const dispatch = useAppDispatch();
  const nightModeState = useAppSelector((state) => state.nightMode);
  const isNightMode = nightModeState.isNightMode;
  const nightTime = nightModeState.nightTime;

  useEffect(() => {
    timeoutNightStarts && clearTimeout(timeoutNightStarts);
    timeoutNightEnds && clearTimeout(timeoutNightEnds);

    if (isNightMode) {
      const runTimeoutStart = () => {
        dispatch(setTheme('dark'));
        timeoutNightStarts = setTimeout(runTimeoutStart, 24 * 3600 * 1000);
      };

      const nextStartTime = getNextTime(nightTime[0]);
      timeoutNightStarts = setTimeout(runTimeoutStart, nextStartTime);

      const runTimeoutEnd = () => {
        dispatch(setTheme('light'));
        timeoutNightEnds = setTimeout(runTimeoutEnd, 24 * 3600 * 1000);
      };

      let nextEndTime = getNextTime(nightTime[1]);
      nextEndTime = nextStartTime > nextEndTime ? nextEndTime + 24 * 3600 * 1000 : nextEndTime;

      timeoutNightEnds = setTimeout(runTimeoutEnd, nextEndTime);
    }

    return () => {
      timeoutNightStarts && clearTimeout(timeoutNightStarts);
      timeoutNightEnds && clearTimeout(timeoutNightEnds);
    };
  }, [dispatch, isNightMode, nightTime]);
};
