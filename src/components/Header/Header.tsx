import React from 'react';
import { DesktopHeader } from './layouts/DesktopHeader';
import { MobileHeader } from './layouts/MobileHeader';
import { useResponsive } from 'hooks/useResponsive';

interface HeaderProps {
  toggleSider: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider }) => {
  const { isTablet } = useResponsive();

  return isTablet ? <DesktopHeader /> : <MobileHeader toggleSider={toggleSider} />;
};
