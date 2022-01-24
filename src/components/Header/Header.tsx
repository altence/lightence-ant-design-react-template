import React from 'react';
import { DesktopHeader } from './layouts/DesktopHeader';
import { MobileHeader } from './layouts/MobileHeader';
import { useResponsive } from 'hooks/useResponsive';

interface HeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
  isTwoColumnsLayout: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider, isSiderOpened, isTwoColumnsLayout }) => {
  const { isTablet } = useResponsive();

  return isTablet ? (
    <DesktopHeader isTwoColumnsLayout={isTwoColumnsLayout} />
  ) : (
    <MobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />
  );
};
