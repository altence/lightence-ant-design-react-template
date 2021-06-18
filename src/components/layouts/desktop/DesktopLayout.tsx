import { Layout } from 'antd';
import React from 'react';
import { LayoutProps } from '../interfaces';
import DesktopSider from './DesktopSider';
import styled from 'styled-components';

const { Header, Footer, Content } = Layout;

const DesktopLayout: React.FC<LayoutProps> = ({ children, siderContent }) => {
  return (
    <LayoutStyled>
      <DesktopSider>{siderContent}</DesktopSider>
      <Layout>
        <Header>HEADER</Header>
        <Content>{children}</Content>
        <Footer>FOOTER</Footer>
      </Layout>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  height: 100vh;
`;

export default DesktopLayout;
