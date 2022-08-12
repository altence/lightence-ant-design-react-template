import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.bold};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.md};
  }

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const Text = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
`;

export const IconWrapper = styled.span`
  font-size: 0.625rem;
`;
