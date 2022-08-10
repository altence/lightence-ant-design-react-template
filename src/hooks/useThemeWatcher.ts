import { useEffect, useRef } from 'react';
import { useAppSelector } from './reduxHooks';

export const useThemeWatcher = (): void => {
  const theme = useAppSelector((state) => state.theme.theme);
  const root = useRef(document.querySelector(':root'));

  useEffect(() => {
    if (root.current) {
      root.current.setAttribute('data-theme', theme);
    }
  }, [theme]);
};
