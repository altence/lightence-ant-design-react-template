import styled, { css } from 'styled-components';
import { Layout } from 'antd';
import { media } from '@app/styles/themes/light/lightTheme';

const { Content } = Layout;

interface HeaderProps {
  $isTwoColumnsLayout: boolean;
}

export default styled(Content)<HeaderProps>`
  padding: var(--mobile-padding-vertical) var(--mobile-padding-horizontal);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and ${media.md} {
    padding: var(--desktop-padding-vertical) var(--desktop-padding-horizontal);
  }

  @media only screen and ${media.xl} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        padding: 0;
      `}
  }
`;
