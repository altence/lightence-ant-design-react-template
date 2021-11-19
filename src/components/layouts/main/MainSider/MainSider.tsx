import React, { useMemo } from 'react';
import Overlay from '../../../common/Overlay';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './MainSider.styles';
import { SiderLogo } from './SiderLogo';

interface MainSiderProps {
  toggleSider: () => void;
  isCollapsed: boolean;
}

const MainSider: React.FC<MainSiderProps> = ({ children, toggleSider, isCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly]);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>{children}</S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default MainSider;
