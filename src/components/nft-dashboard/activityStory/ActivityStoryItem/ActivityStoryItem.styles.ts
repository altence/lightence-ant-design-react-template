import { Typography } from 'antd';
import styled from 'styled-components';

interface StatusProps {
  $color: string;
}

export const Title = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const Status = styled(Typography.Text)<StatusProps>`
  color: ${(props) => props.$color};

  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const DateText = styled(Title)`
  font-weight: ${(props) => props.theme.commonFontWeight.regular};
`;

export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  font-family: ${(props) => props.theme.fonts.secondary};
`;
