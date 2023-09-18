import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/utils/utils';
import styled from 'styled-components';

export const Title = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  @media only screen and (${media('xl')}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const IconWrapper = styled.span`
  font-size: 0.625rem;
`;
