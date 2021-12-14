import { Typography } from 'antd';
import styled from 'styled-components';

export const MonthSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  margin: 0 1rem;
  width: 7rem;
  text-align: center;
`;
