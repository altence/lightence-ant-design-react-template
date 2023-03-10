import styled from 'styled-components';
import { DatePicker } from 'antd';
import { RangePickerProps as BaseRangePickerProps } from 'antd/lib/date-picker';

export type { BaseRangePickerProps };

export const BaseRangePicker = styled(DatePicker.RangePicker)<BaseRangePickerProps>`
  & input {
    font-family: inherit;
  }
`;
