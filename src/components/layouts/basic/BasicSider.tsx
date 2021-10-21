import React from 'react';
import { Button, Layout } from 'antd';
import styled, { css } from 'styled-components';
import { SiderProps } from 'antd/lib/layout';
import { RightOutlined } from '@ant-design/icons';
import Overlay from '../../common/Overlay';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

const { Sider } = Layout;

interface CollapseProps {
  isCollapsed: boolean;
}

interface MainSiderProps extends SiderProps {
  toggleSider: () => void;
  isCollapsed: boolean;
}

const BasicSider: React.FC<MainSiderProps> = ({ children, toggleSider, isCollapsed, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  return (
    <>
      <SiderStyled
        trigger={null}
        collapsed={isDesktop ? false : isCollapsed}
        collapsedWidth={(isTablet && 60) || 0}
        collapsible={true}
        width={260}
        {...props}
      >
        <SiderContent>
          {!isDesktop && (
            <CollapseWrapper isCollapsed={isCollapsed}>
              <Button
                type="text"
                icon={<RightOutlined rotate={!isTablet ? 0 : isCollapsed ? 0 : 180} />}
                onClick={toggleSider}
              />
            </CollapseWrapper>
          )}
          {children}
        </SiderContent>
      </SiderStyled>
      {!isTablet && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

const SiderStyled = styled(Sider)`
  position: fixed;
  overflow: scroll;
  right: 0;
  z-index: 5;
  height: 100%;

  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.md} {
    right: unset;
    left: 0;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    position: unset;
    overflow: unset;
    height: unset;
  }
`;

const CollapseWrapper = styled.div<CollapseProps>`
  padding: 1rem 0.5rem;
  margin-bottom: 2rem;

  height: ${(props) => props.theme.desktopLayout.headerLineHeight};

  & > button {
    @media only screen and ${(props) => props.theme.media.md} {
      position: absolute;
      transform: translateX(50%);
      right: 50%;
      transition: all 0.3s ease;

      ${(props) =>
        !props.isCollapsed &&
        css`
          right: 1.35rem;
        `};
    }

    color: ${(props) => props.theme.colors.text.secondary};

    &:hover {
      color: ${(props) => props.theme.colors.text.secondary};
    }

    &:focus {
      color: ${(props) => props.theme.colors.text.secondary};
    }
  }
`;

const SiderContent = styled.div`
  padding: 0.75rem 1rem;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) => props.theme.desktopLayout.paddingVertical} 0;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    padding: 6.25rem 0;
  }
`;

export default BasicSider;
