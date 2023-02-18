import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_WEIGHT, FONT_SIZE } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const Title = styled(BaseTypography.Text)`
  font-weight: ${FONT_WEIGHT.bold};

  font-size: ${FONT_SIZE.lg};
`;
