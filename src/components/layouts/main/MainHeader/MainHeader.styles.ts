import { Layout } from 'antd';
import styled from 'styled-components';

export const Header = styled(Layout.Header)`
  line-height: 1.5;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) => `0 ${props.theme.desktopLayout.paddingHorizontal}`};
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    padding: ${(props) => `0 ${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
