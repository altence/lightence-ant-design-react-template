import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import MobileSider from './MobileSider';
import hamburgerIcon from '../../../assets/icons/hamburger.svg';
import styled from 'styled-components';
import { LayoutProps } from '../interfaces';

const { Header, Footer, Content } = Layout;

const MobileLayout: React.FC<LayoutProps> = ({ children, siderContent }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);
  const icon = <img src={hamburgerIcon} alt="Toggle Sider" />;

  return (
    <LayoutStyled>
      <MobileSider collapsed={siderCollapsed} toggleSider={toggleSider} siderCollapsed={siderCollapsed}>
        {siderContent}
      </MobileSider>
      <Layout>
        <HeaderStyled>
          <Button type="text" icon={icon} onClick={toggleSider} />
        </HeaderStyled>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  height: 100vh;
`;

const HeaderStyled = styled(Header)`
  background: radial-gradient(
    105.83% 2039.86% at 93.06% 21.95%,
    rgba(56, 179, 206, 0.7) 0%,
    rgba(131, 217, 84, 0.7) 100%
  );
`;

export default MobileLayout;
