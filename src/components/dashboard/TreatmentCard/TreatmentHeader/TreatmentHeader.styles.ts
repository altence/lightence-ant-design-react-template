import { Button as AntButton, Typography } from 'antd';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarBtn = styled(AntButton)`
  color: ${(props) => props.theme.colors.main.primary};
`;

export const MonthSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(AntButton)`
  font-size: 0.5rem;

  @media only screen and ${theme.media.xl} {
    font-size: 0.75rem;
  }
`;

export const Text = styled(Typography.Text)`
  font-size: 0.625rem;
  font-weight: 500;
  text-align: center;
  width: 5rem;
  margin: 0 0.2rem;

  @media only screen and ${theme.media.xl} {
    font-size: 0.75rem;
    width: 7rem;
  }
`;
