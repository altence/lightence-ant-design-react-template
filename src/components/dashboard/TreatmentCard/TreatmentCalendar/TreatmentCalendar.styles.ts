import { Calendar as AntCalendar, Typography } from 'antd';
import styled from 'styled-components';

interface LegendProps {
  isPrimary?: boolean;
}

export const Wrapper = styled.div`
  width: 40%;
`;

export const Calendar = styled(AntCalendar)`
  & .ant-picker-calendar-header {
    display: none;
  }

  & .ant-picker-panel {
    border-top: none;
  }

  & .ant-picker-date-panel .ant-picker-content th {
    font-weight: 500;

    color: ${(props) => props.theme.colors.primaryDark};
  }

  & .ant-picker-cell-inner {
    height: 2.37rem;
    width: 2.37rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Legend = styled.div`
  display: flex;
  padding: 1rem;
`;

export const LegendItem = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 0 0.3rem;
`;

export const LegendIcon = styled.div<LegendProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  box-shadow: 0px 5px 15px rgba(0, 89, 171, 0.3);
  flex-shrink: 0;
  margin-right: 0.5rem;

  background-color: ${(props) => (props.isPrimary && props.theme.colors.primary) || props.theme.colors.basic};
`;

export const Text = styled(Typography.Text)`
  font-size: 0.75rem;
  margin-left: 0.5rem;
`;
