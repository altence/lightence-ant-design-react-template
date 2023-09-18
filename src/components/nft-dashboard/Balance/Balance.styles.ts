import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import styled from 'styled-components';

export const TitleText = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 1.25rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const TitleBalanceText = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    font-family: ${({ theme }) => theme.fontFamilies.secondary};
  }
`;

export const SubtitleBalanceText = styled(BaseTypography.Text)`
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.nft.textLight};
`;
