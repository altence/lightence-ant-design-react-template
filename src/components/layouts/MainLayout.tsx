import React from 'react';
import MobileLayout from './mobile/MobileLayout';
import SiderContent from '../sider/SiderContent';
import DesktopLayout from './desktop/DesktopLayout';
import { useMediaQuery } from 'react-responsive';
import theme from '../../styles/theme';
import logo from '../../assets/images/logo.svg';

const MainLayout: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  const Logo = <img src={logo} alt="Altence" />;

  // TODO mini logo for mobile layout
  return isTablet ? (
    <DesktopLayout siderContent={<SiderContent />} logo={Logo}>
      {children}
    </DesktopLayout>
  ) : (
    <MobileLayout siderContent={<SiderContent />} logo={Logo}>
      {children}
    </MobileLayout>
  );
};

export default MainLayout;
