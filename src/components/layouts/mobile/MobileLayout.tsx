import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import MobileSider from './MobileSider';
import hamburgerIcon from '../../../assets/icons/hamburger.svg';
import styled from 'styled-components';
import { LayoutProps } from '../interfaces';
import MobileContent from './MobileContent';

const { Header } = Layout;

const MobileLayout: React.FC<LayoutProps> = ({ children, siderContent, logo }) => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);
  const icon = <img src={hamburgerIcon} alt="Toggle Sider" />;

  return (
    <LayoutStyled>
      <MobileSider collapsed={siderCollapsed} toggleSider={toggleSider} siderCollapsed={siderCollapsed} logo={logo}>
        {siderContent}
      </MobileSider>
      <Layout>
        <Header>
          <Button size="small" type="link" icon={icon} onClick={toggleSider} />
        </Header>
        <MobileContent>{children}</MobileContent>
      </Layout>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;

export default MobileLayout;
