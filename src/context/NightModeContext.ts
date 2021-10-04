import React from 'react';

interface NightModeContextProps {
  isNightMode: boolean;
  setNightMode: (isNightMode: boolean) => void;
  nightTime: number[];
  setNightTime: (nightTime: number[]) => void;
}

export const NightModeContext = React.createContext<NightModeContextProps>({
  isNightMode: false,
  setNightMode: () => null,
  nightTime: [],
  setNightTime: () => null,
});
