import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/utils/utils';
import styled from 'styled-components';

export const Description = styled(BaseTypography.Text)`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-bottom: 1rem;

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: 2rem;
  }
`;
