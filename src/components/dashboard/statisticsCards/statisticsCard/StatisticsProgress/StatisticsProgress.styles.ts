import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

export const ValueText = styled(Typography.Text)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
`;

export const UnitText = styled(Typography.Text)`
  font-size: ${FONT_SIZE.xxs};
  font-weight: ${FONT_WEIGHT.semibold};
`;
