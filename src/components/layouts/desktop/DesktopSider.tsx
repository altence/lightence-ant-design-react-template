import React, { ReactNode, useState } from 'react';
import { Button, Layout } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

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
        <Logo href="/" hidden={siderCollapsed}>
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

  padding: ${(props) => props.theme.desktopLayout.paddingVertical}
    ${(props) => props.theme.desktopLayout.paddingHorizontal};

  color: ${(props) => props.theme.colors.basic};

  ${(props) =>
    props.collapsed &&
    css`
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    `}
`;

const CollapseIcon = styled(RightOutlined)`
  color: ${(props) => props.theme.colors.basic};
`;

const CollapseDiv = styled.div`
  height: ${(props) => props.theme.desktopLayout.headerLineHeight};
  line-height: ${(props) => props.theme.desktopLayout.headerLineHeight};
  text-align: right;
`;

const LogoDiv = styled.div`
  height: ${(props) =>
    `calc(${props.theme.desktopLayout.contentOffset} -
      ${props.theme.desktopLayout.headerLineHeight} -
      ${props.theme.desktopLayout.headerLineHeight} -
      ${props.theme.desktopLayout.paddingVertical}
    )`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.desktopLayout.headerLineHeight};
`;

const ContentDiv = styled.div`
  padding: ${(props) => props.theme.desktopLayout.paddingVertical} 0;
`;

interface LogoProps {
  hidden: boolean;
}

const Logo = styled.a<LogoProps>`
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

export default DesktopSider;
