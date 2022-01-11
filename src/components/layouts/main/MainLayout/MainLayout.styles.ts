import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutMaster = styled(Layout)`
  height: 100vh;
`;

export const LayoutMain = styled(Layout)`
  background-color: ${(props) => props.theme.colors.main.secondaryBackground};

  @media only screen and ${(props) => props.theme.media.md} {
    margin-left: 80px;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    margin-left: unset;
  }
`;
