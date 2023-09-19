import { BaseLayout } from '@app/components/common/BaseLayout/BaseLayout';
import { LAYOUT } from '@app/styles/themes/constants';
import { media } from '@app/utils/utils';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(BaseLayout.Header)<Header>`
  line-height: 1.5;
  background: ${({ theme }) => theme.layoutHeaderBg};
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media only screen and (${media('md')}) {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};

    ${(props) =>
      props.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
