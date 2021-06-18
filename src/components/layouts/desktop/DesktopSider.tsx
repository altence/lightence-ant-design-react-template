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
      <CollapseDiv>
        <Button type="link" icon={<CollapseIcon rotate={siderCollapsed ? 180 : 0} />} onClick={toggleSider} />
      </CollapseDiv>
      <LogoDiv>
        <Logo href="/" hidden={siderCollapsed}>
          <img src={logo} alt="Altence" />
        </Logo>
      </LogoDiv>
      <ContentDiv>{children}</ContentDiv>
    </SiderStyled>
  );
};

const SiderStyled = styled(Sider)`
  padding: ${(props) => props.theme.desktopLayout.paddingVertical}
    ${(props) => props.theme.desktopLayout.paddingHorizontal};

  color: ${(props) => props.theme.colors.white};
`;

const CollapseIcon = styled(RightOutlined)`
  color: ${(props) => props.theme.colors.white};
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
