import styled from 'styled-components';
import { media } from '@app/styles/themes/constants';
import { BaseLayout } from '@app/components/common/BaseLayout/BaseLayout';

export const LayoutMaster = styled(BaseLayout)`
  height: 100vh;
`;

export const LayoutMain = styled(BaseLayout)`
  @media only screen and ${media.md} {
    margin-left: 80px;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
`;
