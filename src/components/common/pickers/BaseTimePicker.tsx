import styled from 'styled-components';
import { DatePicker } from 'antd';
import { TimePickerProps as BaseTimePickerProps } from 'antd';

export type { BaseTimePickerProps };

export const BaseTimePicker = styled(DatePicker.TimePicker)<BaseTimePickerProps>`
  & input {
    font-family: inherit;
  }
`;
