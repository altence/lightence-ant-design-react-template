import React from 'react';
import MobileLayout from './mobile/MobileLayout';
import SiderContent from '../sider/SiderContent';

const MainLayout: React.FC = ({ children }) => {
  return <MobileLayout siderContent={<SiderContent />}>{children}</MobileLayout>;
};

export default MainLayout;
