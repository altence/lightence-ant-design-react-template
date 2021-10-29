import React from 'react';
import { DesktopHeader } from './DesktopHeader/DesktopHeader';
import { MobileHeader } from './MobileHeader/MobileHeader';
import { useResponsive } from 'hooks/useResponsive';

interface HeaderProps {
  toggleSider: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider }) => {
  const { isTablet } = useResponsive();

  return isTablet ? <DesktopHeader /> : <MobileHeader toggleSlider={toggleSider} />;
};
