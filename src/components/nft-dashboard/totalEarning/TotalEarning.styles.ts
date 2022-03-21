import { Typography } from 'antd';
import styled from 'styled-components';

interface ValueTextProps {
  $color: 'success' | 'error';
}

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const ValueText = styled(Typography.Text)<ValueTextProps>`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-family: ${(props) => props.theme.fonts.secondary};

  color: ${(props) => props.theme.colors.main[props.$color]};
`;
