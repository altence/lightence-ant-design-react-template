import React, { useState } from 'react';
import { Header } from '../../../Header/Header';
import MainSider from '../sider/MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import { Outlet } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { useResponsive } from '@app/hooks/useResponsive';

const MainLayout: React.FC = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop, isTablet } = useResponsive();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const eventPathHasNoSwipeClass = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());

    return path.some((el: Element) => el.classList && el.classList.contains('no-swipe'));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (event) => !eventPathHasNoSwipeClass(event.event) && setSiderCollapsed(isTablet ? true : false),
    onSwipedRight: (event) => !eventPathHasNoSwipeClass(event.event) && setSiderCollapsed(isTablet ? false : true),
  });

  return (
    <div {...(!isDesktop && swipeHandlers)}>
      <S.LayoutMaster>
        <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
        <S.LayoutMain>
          <MainHeader>
            <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} />
          </MainHeader>
          <MainContent>
            <Outlet />
          </MainContent>
        </S.LayoutMain>
      </S.LayoutMaster>
    </div>
  );
};

export default MainLayout;
