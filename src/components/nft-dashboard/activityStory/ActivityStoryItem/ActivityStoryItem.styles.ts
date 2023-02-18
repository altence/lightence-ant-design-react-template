import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import styled from 'styled-components';

interface StatusProps {
  $color: 'error' | 'warning' | 'success' | 'primary' | 'secondary';
}

export const Title = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};

  font-family: ${FONT_FAMILY.secondary};
`;

export const Status = styled(BaseTypography.Text)<StatusProps>`
  color: ${(props) => `var(--${props.$color}-color)`};

  font-size: ${FONT_SIZE.xs};

  font-family: ${FONT_FAMILY.secondary};
`;

export const DateText = styled(Title)`
  font-weight: ${FONT_WEIGHT.regular};
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.regular};

  font-family: ${FONT_FAMILY.secondary};
`;
