import React, { useState } from 'react';
import { Layout } from 'antd';
import MobileSider from './MobileSider';
import styled from 'styled-components';
import { LayoutProps } from '../interfaces';
import MobileContent from './MobileContent';
import MobileHeader from './MobileHeader';
import { Header } from '../../Header/Header';
import { Container } from '../../common/Container/Container';
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
          <Container>
            <Header toggleSider={toggleSider} />
          </Container>
        </MobileHeader>
        <MobileContent>
          <Container>{children}</Container>
        </MobileContent>
      </LayoutStyled>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
  background: url(${bg}) no-repeat;
  background-size: auto 200px;
`;

export default MobileLayout;
