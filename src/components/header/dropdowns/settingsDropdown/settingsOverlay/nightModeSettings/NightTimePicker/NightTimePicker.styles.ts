import { media } from '@app/styles/themes/light/lightTheme';
import { Typography } from 'antd';
import styled from 'styled-components';

export const PickerLabel = styled(Typography.Text)`
  font-size: 0.875rem;

  @media only screen and ${media.md} {
    font-size: 1rem;
  }
`;
