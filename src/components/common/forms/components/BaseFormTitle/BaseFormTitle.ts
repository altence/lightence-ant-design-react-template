import styled from 'styled-components';
import { media } from '@app/utils/utils';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

export const BaseFormTitle = styled(BaseTypography.Text)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: block;

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
