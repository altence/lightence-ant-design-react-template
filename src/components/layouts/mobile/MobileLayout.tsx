import React, { useState } from 'react';
import { Layout } from 'antd';
import MobileSider from './MobileSider';
import styled from 'styled-components';
import { LayoutProps } from '../interfaces';
import MobileContent from './MobileContent';
import MobileHeader from './MobileHeader';
import { Header } from '../../Header/Header';
import { Container } from '../../common/Container/Container';

const MobileLayout: React.FC<LayoutProps> = ({ children, siderContent, logo }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <LayoutStyled>
      <MobileSider collapsed={siderCollapsed} toggleSider={toggleSider} siderCollapsed={siderCollapsed} logo={logo}>
        {siderContent}
      </MobileSider>
      <Layout>
        <MobileHeader>
          <Container>
            <Header toggleSider={toggleSider} />
          </Container>
        </MobileHeader>
        <MobileContent>
          <Container>{children}</Container>
        </MobileContent>
      </Layout>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;

export default MobileLayout;
