import { Layout } from 'antd';
import React from 'react';
import { LayoutProps } from '../interfaces';
import DesktopSider from './DesktopSider';
import styled from 'styled-components';
import DesktopHeader from './DesktopHeader';
import DesktopContent from './DesktopContent';
import { Header } from '../../Header/Header';
import theme from '../../../styles/theme';
import bg from 'assets/images/bg.png';

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
  max-width: 1920px;
  margin: 0 auto;
`;

const ContentLayoutStyled = styled(Layout)`
  margin-left: 60px;

  background: url(${bg}) no-repeat;
  background-size: 100% 250px;

  background-color: ${(props) => props.theme.colors.back.lightGray};

  @media only screen and ${theme.media.xxl} {
    margin-left: unset;
  }
`;

export default DesktopLayout;
