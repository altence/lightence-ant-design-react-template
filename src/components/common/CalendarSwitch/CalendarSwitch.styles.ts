import { Typography } from 'antd';
import styled from 'styled-components';

export const CalendarSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled(Typography.Text)`
  font-weight: bold;
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.lg};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  & > * {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`;
