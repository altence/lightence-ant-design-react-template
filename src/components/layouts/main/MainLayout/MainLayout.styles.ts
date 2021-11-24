import styled from 'styled-components';
import { Layout } from 'antd';
import bg from 'assets/images/bg.png';

export const LayoutMaster = styled(Layout)`
  min-height: 100vh;
  max-height: 100vh;
`;

export const LayoutMain = styled(Layout)`
  background: url(${bg}) no-repeat;
  background-size: auto 200px;

  background-color: ${(props) => props.theme.colors.main.secondaryBackground};

  @media only screen and ${(props) => props.theme.media.md} {
    margin-left: 60px;

    background: url(${bg}) no-repeat;
    background-size: 100% 250px;

    background-color: ${(props) => props.theme.colors.main.secondaryBackground};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-left: unset;
  }
`;
