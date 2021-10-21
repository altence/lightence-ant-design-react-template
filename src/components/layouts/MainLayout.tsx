import React from 'react';
import BasicLayout from './basic/BasicLayout';
import SiderContent from '../sider/SiderContent';

const MainLayout: React.FC = ({ children }) => {
  return <BasicLayout siderContent={<SiderContent />}>{children}</BasicLayout>;
};

export default MainLayout;
