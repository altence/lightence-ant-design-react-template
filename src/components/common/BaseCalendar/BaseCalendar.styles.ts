import styled from 'styled-components';
import { Calendar as AntCalendar } from 'antd';
import { FONT_WEIGHT } from '@app/styles/themes/constants';

export const Calendar = styled(AntCalendar)`
  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    font-weight: ${FONT_WEIGHT.bold};
  }
`;
