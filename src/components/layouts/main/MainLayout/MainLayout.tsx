import React, { useState } from 'react';
import { Header } from '../../../Header/Header';
import MainSider from '../MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import SiderContent from 'components/sider/SiderContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} toggleSider={toggleSider}>
        <SiderContent setCollapsed={setSiderCollapsed} />
      </MainSider>
      <S.LayoutMain>
        <MainHeader>
          <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} />
        </MainHeader>
        <MainContent>
          <Outlet />
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
