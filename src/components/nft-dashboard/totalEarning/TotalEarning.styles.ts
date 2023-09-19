import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import styled from 'styled-components';

interface ValueTextProps {
  $color: 'success' | 'error';
}

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
`;

export const ValueText = styled(BaseTypography.Text)<ValueTextProps>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamilies.secondary};
  color: ${(props) => props.theme[props.$color]};
`;
