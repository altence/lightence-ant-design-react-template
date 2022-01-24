import { Layout } from 'antd';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(Layout.Header)<Header>`
  line-height: 1.5;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
    height: ${(props) => props.theme.desktopLayout.headerHeight};
  }

  @media only screen and ${(props) => props.theme.media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
