import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import MainSider from './sider/MainSider';
import SiderContent from './sider/SiderContent';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import styled from 'styled-components';

const { Header, Footer, Content } = Layout;

const MainLayout: React.FC = ({ children }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);
  const icon = <img src={hamburgerIcon} alt="Toggle Sider" />;

  return (
    <LayoutStyled>
      <MainSider
        collapsible={true}
        collapsed={siderCollapsed}
        trigger={null}
        collapsedWidth={0}
        toggleSider={toggleSider}
        siderCollapsed={siderCollapsed}
      >
        <SiderContent />
      </MainSider>
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

export default MainLayout;
