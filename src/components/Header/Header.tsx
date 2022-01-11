import React, { useEffect } from 'react';
import { DesktopHeader } from './layouts/DesktopHeader';
import { MobileHeader } from './layouts/MobileHeader';
import { useResponsive } from 'hooks/useResponsive';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
  withDivider: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider, isSiderOpened, withDivider }) => {
  const { isTablet } = useResponsive();

  return isTablet ? (
    <DesktopHeader withDivider={withDivider} />
  ) : (
    <MobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />
  );
};
