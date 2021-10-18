import React, { useState } from 'react';
import { Layout } from 'antd';
import MobileSider from './MobileSider';
import styled from 'styled-components';
import { LayoutProps } from '../interfaces';
import MobileContent from './MobileContent';
import MobileHeader from './MobileHeader';
import { Header } from '../../Header/Header';
import bg from 'assets/images/bg.png';

const MobileLayout: React.FC<LayoutProps> = ({ children, siderContent, logo }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <LayoutStyled>
      <MobileSider collapsed={siderCollapsed} toggleSider={toggleSider} siderCollapsed={siderCollapsed} logo={logo}>
        {siderContent}
      </MobileSider>
      <LayoutStyled>
        <MobileHeader>
          <Header toggleSider={toggleSider} />
        </MobileHeader>
        <MobileContent>{children}</MobileContent>
      </LayoutStyled>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
  background: url(${bg}) no-repeat;
  background-size: auto 200px;

  background-color: ${(props) => props.theme.colors.back.lightGray};
`;

export default MobileLayout;
