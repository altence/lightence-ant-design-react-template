import React from 'react';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Overlay from '../../../common/Overlay';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './MainSider.styles';

interface MainSiderProps {
  toggleSider: () => void;
  isCollapsed: boolean;
}

const MainSider: React.FC<MainSiderProps> = ({ children, toggleSider, isCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={isCollapsed}
        collapsedWidth={tabletOnly ? 60 : 0}
        collapsible={mobileOnly && tabletOnly}
        width={260}
        {...props}
      >
        <S.SiderContent>
          {!isDesktop && (
            <S.CollapseWrapper isCollapsed={isCollapsed}>
              <Button
                type="text"
                icon={<RightOutlined rotate={(tabletOnly && !isCollapsed && 180) || 0} />}
                onClick={toggleSider}
              />
            </S.CollapseWrapper>
          )}
          {children}
        </S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default MainSider;
