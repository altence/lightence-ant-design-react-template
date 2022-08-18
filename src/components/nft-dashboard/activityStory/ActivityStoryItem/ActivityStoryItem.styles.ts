import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

interface StatusProps {
  $color: 'error' | 'warning' | 'success' | 'primary' | 'secondary';
}

export const Title = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xs};

  font-family: ${FONT_FAMILY.secondary};
`;

export const Status = styled(Typography.Text)<StatusProps>`
  color: ${(props) => `var(--${props.$color}-color)`};

  font-size: ${FONT_SIZE.xs};

  font-family: ${FONT_FAMILY.secondary};
`;

export const DateText = styled(Title)`
  font-weight: ${FONT_WEIGHT.regular};
`;

export const Text = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.regular};

  font-family: ${FONT_FAMILY.secondary};
`;
