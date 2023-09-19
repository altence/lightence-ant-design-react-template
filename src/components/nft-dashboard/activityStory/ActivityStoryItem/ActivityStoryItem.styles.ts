import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import styled from 'styled-components';

interface StatusProps {
  $color: 'error' | 'warning' | 'success' | 'primary' | 'secondary';
}

export const Title = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
`;

export const Status = styled(BaseTypography.Text)<StatusProps>`
  color: ${(props) => props.theme[props.$color]};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
`;

export const DateText = styled(Title)`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
`;
