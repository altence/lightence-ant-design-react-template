import React from 'react';
import BasicLayout from './basic/BasicLayout/BasicLayout';
import SiderContent from '../sider/SiderContent';

const MainLayout: React.FC = ({ children }) => {
  return (
    <BasicLayout siderContent={(toggleSlider) => <SiderContent toggleSider={toggleSlider} />}>{children}</BasicLayout>
  );
};

export default MainLayout;
