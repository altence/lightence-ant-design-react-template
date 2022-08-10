import { media } from '@app/styles/themes/light/lightTheme';
import { Layout } from 'antd';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(Layout.Header)<Header>`
  line-height: 1.5;

  @media only screen and ${media.md} {
    padding: var(--desktop-padding-vertical) var(--desktop-padding-horizontal);
    height: var(--desktop-header-height);
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
