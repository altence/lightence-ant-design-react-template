import { Calendar as AntCalendar } from 'antd';
import styled from 'styled-components';

interface Cell {
  isSelected: boolean;
}

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
    /* display: flex;
    flex-direction: column;
    width: 2.37rem;
    height: 2.37rem;
    margin: 0 auto;
    justify-content: center; */
  }
`;
