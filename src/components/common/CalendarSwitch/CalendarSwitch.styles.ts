import { FONT_SIZE, media } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

export const CalendarSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled(Typography.Text)`
  font-weight: bold;
  font-size: ${FONT_SIZE.xs};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  & > * {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`;
