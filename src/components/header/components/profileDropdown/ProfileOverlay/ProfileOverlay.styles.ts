import styled from 'styled-components';
import { media } from '@app/utils/utils';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { BaseDivider } from '@app/components/common/BaseDivider/BaseDivider';

export const Text = styled(BaseTypography.Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.heights.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  & > a {
    display: block;
  }

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const ItemsDivider = styled(BaseDivider)`
  margin: 0;
`;
