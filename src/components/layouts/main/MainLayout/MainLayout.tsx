import React, { useState } from 'react';
import { Layout } from 'antd';
import { Header } from '../../../Header/Header';
import MainSider from '../MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import * as S from './MainLayout.styles';
import SiderContent from 'components/sider/SiderContent';
import { MainHeader } from '../MainHeader/MainHeader';

const MainLayout: React.FC = ({ children }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} toggleSider={toggleSider}>
        <SiderContent toggleSider={toggleSider} />
      </MainSider>
      <S.LayoutMain>
        <MainHeader>
          <Header toggleSider={toggleSider} />
        </MainHeader>
        <MainContent>{children}</MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
