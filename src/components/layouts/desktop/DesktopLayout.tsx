import { Layout } from 'antd';
import React from 'react';
import { LayoutProps } from '../interfaces';
import DesktopSider from './DesktopSider';
import styled from 'styled-components';
import DesktopHeader from './DesktopHeader';
import DesktopContent from './DesktopContent';

const DesktopLayout: React.FC<LayoutProps> = ({ children, siderContent }) => {
  return (
    <LayoutStyled>
      <DesktopSider>{siderContent}</DesktopSider>
      <ContentLayoutStyled>
        <DesktopHeader>HEADER</DesktopHeader>
        <DesktopContent>{children}</DesktopContent>
      </ContentLayoutStyled>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  height: 100vh;
`;

const ContentLayoutStyled = styled(Layout)`
  background: linear-gradient(#c4c4c4 25%, white 25%);
`;

export default DesktopLayout;
