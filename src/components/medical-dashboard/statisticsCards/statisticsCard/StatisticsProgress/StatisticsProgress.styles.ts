import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const ValueText = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
`;

export const UnitText = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xxs};
  font-weight: ${FONT_WEIGHT.semibold};
`;
