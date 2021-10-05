import { Layout } from 'antd';
import React from 'react';
import { LayoutProps } from '../interfaces';
import DesktopSider from './DesktopSider';
import styled from 'styled-components';
import DesktopHeader from './DesktopHeader';
import DesktopContent from './DesktopContent';
import { Header } from '../../Header/Header';
import theme from '../../../styles/theme';
import { Container } from '../../common/Container/Container';

const DesktopLayout: React.FC<LayoutProps> = ({ children, siderContent, logo }) => {
  return (
    <LayoutStyled>
      <DesktopSider logo={logo}>{siderContent}</DesktopSider>
      <ContentLayoutStyled>
        <DesktopHeader>
          <Container>
            <Header />
          </Container>
        </DesktopHeader>
        <DesktopContent>
          <Container>{children}</Container>
        </DesktopContent>
      </ContentLayoutStyled>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;

const ContentLayoutStyled = styled(Layout)`
  margin-left: 60px;

  @media only screen and ${theme.media.xxl} {
    margin-left: unset;
  }
`;

export default DesktopLayout;
