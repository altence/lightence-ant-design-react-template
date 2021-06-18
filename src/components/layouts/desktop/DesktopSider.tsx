import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import logo from '../../../assets/images/logo.svg';
import { RightOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

const { Sider } = Layout;

const DesktopSider: React.FC = ({ children }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <SiderStyled width={212} collapsible={true} trigger={null} collapsed={siderCollapsed}>
      <LogoDiv>
        <Logo href="/" hidden={siderCollapsed}>
          <img src={logo} alt="Altence" />
        </Logo>
        <Button type="link" icon={<CollapseIcon rotate={siderCollapsed ? 180 : 0} />} onClick={toggleSider} />
      </LogoDiv>
      {children}
    </SiderStyled>
  );
};

interface SiderStyledProps {
  collapsed: boolean;
}

const SiderStyled = styled(Sider)<SiderStyledProps>`
  padding: 1.25rem 2rem;
  color: ${(props) => props.theme.colors.white};

  ${(props) =>
    !props.collapsed &&
    css`
      padding-right: 1rem;
    `}
`;

const CollapseIcon = styled(RightOutlined)`
  color: ${(props) => props.theme.colors.white};
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
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
