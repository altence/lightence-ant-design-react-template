import styled from 'styled-components';
import { Layout } from 'antd';
import bg from 'assets/images/bg.png';

export const LayoutMaster = styled(Layout)`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.main.secondaryBackground};

  @media only screen and ${(props) => props.theme.media.md} {
    height: 100vh;
  }
`;

export const LayoutMain = styled(Layout)`
  background: url(${bg}) no-repeat;
  background-size: ${(props) => `auto ${props.theme.mobileLayout.bgHeight}`};

  background-color: ${(props) => props.theme.colors.main.secondaryBackground};

  @media only screen and ${(props) => props.theme.media.md} {
    margin-left: 80px;

    background: url(${bg}) no-repeat;
    background-size: ${(props) => `100% ${props.theme.desktopLayout.bgHeight}`};

    background-color: ${(props) => props.theme.colors.main.secondaryBackground};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-left: unset;
  }
`;
