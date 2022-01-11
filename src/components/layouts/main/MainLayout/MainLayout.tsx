import React, { useEffect, useState } from 'react';
import { Header } from '../../../Header/Header';
import MainSider from '../sider/MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { DASHBOARD_PATH } from '@app/components/router/AppRouter';

const MainLayout: React.FC = () => {
  const [isDashboardPages, setIsDashboardPages] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const location = useLocation();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  useEffect(() => {
    setIsDashboardPages([DASHBOARD_PATH].includes(location.pathname));
  }, [location.pathname]);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader>
          <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} withDivider={isDashboardPages} />
        </MainHeader>
        <MainContent id="main-content" $twoColumnsLayout={isDashboardPages}>
          <Outlet />
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
