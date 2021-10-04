import { useState } from 'react';

const currentNightMode = localStorage.getItem('nightMode') === 'true';

export const useNightMode = (): [boolean, (isNightMode: boolean) => void] => {
  const [isNightMode, setMode] = useState(currentNightMode);

  const setNightMode = (isNightMode: boolean) => {
    setMode(isNightMode);
    localStorage.setItem('nightMode', JSON.stringify(isNightMode));
  };

  return [isNightMode, setNightMode];
};
