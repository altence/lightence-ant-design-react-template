import { Layout } from 'antd';
import React from 'react';
import { LayoutProps } from '../interfaces';
import DesktopSider from './DesktopSider';
import styled from 'styled-components';
import DesktopHeader from './DesktopHeader';
import DesktopContent from './DesktopContent';
import { Header } from '../../Header/Header';
import theme from '../../../styles/theme';

const DesktopLayout: React.FC<LayoutProps> = ({ children, siderContent, logo }) => {
  return (
    <LayoutStyled>
      <DesktopSider logo={logo}>{siderContent}</DesktopSider>
      <ContentLayoutStyled>
        <DesktopHeader>
          <Header />
        </DesktopHeader>
        <DesktopContent>{children}</DesktopContent>
      </ContentLayoutStyled>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;

const ContentLayoutStyled = styled(Layout)`
  margin-left: 60px;
  background-color: ${(props) => props.theme.colors.basicLight};

  @media only screen and ${theme.media.xxl} {
    margin-left: unset;
  }
`;

export default DesktopLayout;
