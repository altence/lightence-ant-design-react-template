import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/utils/utils';
import styled from 'styled-components';

export const Title = styled(BaseTypography.Text)`
  padding: 0 4rem 0.75rem 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
  border-bottom: 0.2px solid ${({ theme }) => theme.nft.border};

  @media only screen and (${media('xl')}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
