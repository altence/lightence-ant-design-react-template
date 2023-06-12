import { useEffect, useRef } from 'react';
import { useAppSelector } from './reduxHooks';

export const useThemeWatcher = (): void => {
  const theme = useAppSelector((state) => state.theme.theme);
  const root = useRef(document.querySelector(':root'));

  useEffect(() => {
    const html = root.current;
    if (html) {
      html.setAttribute('data-no-transition', '');
      html.setAttribute('data-theme', theme);
      // remove transition after layout update
      requestAnimationFrame(() => {
        html.removeAttribute('data-no-transition');
      });
    }
  }, [theme]);
};
