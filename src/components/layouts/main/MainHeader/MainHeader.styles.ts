import { Layout } from 'antd';
import styled from 'styled-components';

export const Header = styled(Layout.Header)`
  line-height: 1.5;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
