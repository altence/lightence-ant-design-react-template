import { media } from '@app/styles/themes/light/lightTheme';
import { Typography } from 'antd';
import styled from 'styled-components';

export const CalendarSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled(Typography.Text)`
  font-weight: bold;
  font-size: var(--font-size-xs);

  @media only screen and ${media.md} {
    font-size: var(--font-size-lg);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  & > * {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`;
