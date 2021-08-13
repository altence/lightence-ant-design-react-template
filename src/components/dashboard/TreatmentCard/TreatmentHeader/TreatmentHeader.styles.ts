import { Button } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarBtn = styled(Button)`
  color: ${(props) => props.theme.colors.primary};
`;
