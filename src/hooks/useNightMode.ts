import { useState } from 'react';

const DEFAULT_NIGHT_MODE_INTERVAL = [20 * 3600 * 1000, 8 * 3600 * 1000];

const currentNightMode = localStorage.getItem('nightMode') === 'true';
const currentNightTimeJSON = localStorage.getItem('nightTime');
const currentNightTime = currentNightTimeJSON ? JSON.parse(currentNightTimeJSON) : DEFAULT_NIGHT_MODE_INTERVAL;

console.log(currentNightTime);

interface UseNightModeReturnValue {
  isNightMode: boolean;
  setNightMode: (isNightMode: boolean) => void;
  nightTime: number[];
  setNightTime: (nightTime: number[]) => void;
}

export const useNightMode = (): UseNightModeReturnValue => {
  const [isNightMode, setMode] = useState(currentNightMode);

  const setNightMode = (isNightMode: boolean) => {
    setMode(isNightMode);
    localStorage.setItem('nightMode', JSON.stringify(isNightMode));
  };

  const [nightTime, setTime] = useState(currentNightTime);

  const setNightTime = (nightTime: number[]) => {
    setTime(nightTime);
    localStorage.setItem('nightTime', JSON.stringify(nightTime));
  };

  return { isNightMode, setNightMode, nightTime, setNightTime };
};
