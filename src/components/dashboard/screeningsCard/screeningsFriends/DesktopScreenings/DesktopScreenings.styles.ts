import { FONT_WEIGHT, FONT_SIZE } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

export const Title = styled(Typography.Text)`
  font-weight: ${FONT_WEIGHT.bold};

  font-size: ${FONT_SIZE.lg};
`;
