import React from 'react';
import { Button } from 'antd';
import { SiderProps } from 'antd/lib/layout';
import { useMediaQuery } from 'react-responsive';
import { RightOutlined } from '@ant-design/icons';
import Overlay from '../../../common/Overlay';
import theme from 'styles/theme';
import * as S from './BasicSider.styles';

interface MainSiderProps extends SiderProps {
  toggleSider: () => void;
  isCollapsed: boolean;
}

const BasicSider: React.FC<MainSiderProps> = ({ children, toggleSider, isCollapsed, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={isDesktop ? false : isCollapsed}
        collapsedWidth={(isTablet && 60) || 0}
        collapsible={true}
        width={260}
        {...props}
      >
        <S.SiderContent>
          {!isDesktop && (
            <S.CollapseWrapper isCollapsed={isCollapsed}>
              <Button
                type="text"
                icon={<RightOutlined rotate={!isTablet ? 0 : isCollapsed ? 0 : 180} />}
                onClick={toggleSider}
              />
            </S.CollapseWrapper>
          )}
          {children}
        </S.SiderContent>
      </S.Sider>
      {!isTablet && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default BasicSider;
