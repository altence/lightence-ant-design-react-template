import React from 'react';

interface NightModeContextProps {
  isNightMode: boolean;
  setNightMode: (isNightMode: boolean) => void;
}

export const NightModeContext = React.createContext<NightModeContextProps>({
  isNightMode: false,
  setNightMode: () => null,
});
