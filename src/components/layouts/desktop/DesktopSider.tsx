import React, { ReactNode, useState } from 'react';
import { Button, Layout } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const { Sider } = Layout;

interface DesktopSiderProps {
  logo: ReactNode;
}

const DesktopSider: React.FC<DesktopSiderProps> = ({ children, logo }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <SiderStyled width={250} collapsedWidth={60} collapsible={true} trigger={null} collapsed={siderCollapsed}>
      <CollapseDiv>
        <Button
          size="small"
          type="link"
          icon={<CollapseIcon rotate={siderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      </CollapseDiv>
      <LogoDiv>
        <Logo to="/" hidden={siderCollapsed}>
          {logo}
        </Logo>
      </LogoDiv>
      <ContentDiv>{children}</ContentDiv>
    </SiderStyled>
  );
};

const SiderStyled = styled(Sider)`
  position: fixed;
  height: 100%;
  z-index: 999;

  padding: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};

  color: ${(props) => props.theme.colors.text.secondary};

  background: ${(props) => props.theme.colors.main.primaryGradient};

  ${(props) =>
    props.collapsed &&
    css`
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    `}

  @media only screen and ${theme.media.xxl} {
    position: unset;
    height: unset;
  }
`;

const CollapseIcon = styled(RightOutlined)`
  color: ${(props) => props.theme.colors.text.secondary};
`;

const CollapseDiv = styled.div`
  text-align: right;

  line-height: ${(props) => props.theme.desktopLayout.headerLineHeight};

  height: ${(props) => props.theme.desktopLayout.headerLineHeight};
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${(props) =>
    `calc(${props.theme.desktopLayout.contentOffset} -
      ${props.theme.desktopLayout.headerLineHeight} -
      ${props.theme.desktopLayout.headerLineHeight} -
      ${props.theme.desktopLayout.paddingVertical}
    )`};

  margin-bottom: ${(props) => props.theme.desktopLayout.headerLineHeight};
`;

const ContentDiv = styled.div`
  padding: ${(props) => props.theme.desktopLayout.paddingVertical} 0;
`;

interface LogoProps {
  hidden: boolean;
}

const Logo = styled(Link)<LogoProps>`
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

export default DesktopSider;
