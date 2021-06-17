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
        <Header>
          <Button type="text" icon={icon} onClick={toggleSider} />
        </Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  height: 100vh;
`;

export default MainLayout;
