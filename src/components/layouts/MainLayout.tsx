import React from 'react';
import MobileLayout from './mobile/MobileLayout';
import SiderContent from '../sider/SiderContent';
import DesktopLayout from './desktop/DesktopLayout';
import { useMediaQuery } from 'react-responsive';
import theme from '../../styles/theme';

const MainLayout: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: theme.media.md,
  });

  const Layout = isDesktop ? DesktopLayout : MobileLayout;

  return <Layout siderContent={<SiderContent />}>{children}</Layout>;
};

export default MainLayout;
