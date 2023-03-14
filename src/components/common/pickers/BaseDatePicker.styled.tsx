import styled from 'styled-components';
import { DatePicker as AntDatePicker } from 'antd';

export const DatePicker = styled(AntDatePicker)`
  & input {
    font-family: inherit;
  }
`;

export const RangePicker = styled(AntDatePicker.RangePicker)`
  & input {
    font-family: inherit;
  }
`;

export const TimePicker = styled(AntDatePicker.TimePicker)`
  & input {
    font-family: inherit;
  }
`;
