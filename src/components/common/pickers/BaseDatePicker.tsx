import React from 'react';
import { DatePickerProps } from 'antd';
import * as S from './BaseDatePicker.styled';

export type BaseDatePickerProps = DatePickerProps;

const DatePicker = React.forwardRef<React.Component<BaseDatePickerProps>, BaseDatePickerProps>(
  ({ className, ...props }, ref) => <S.DatePicker ref={ref} className={className} {...props} />,
);

type DatePickerForwardRef = typeof DatePicker;

interface BaseDatePickerInterface extends DatePickerForwardRef {
  RangePicker: typeof S.RangePicker;
  TimePicker: typeof S.TimePicker;
}

export const BaseDatePicker = DatePicker as BaseDatePickerInterface;

BaseDatePicker.RangePicker = S.RangePicker;
BaseDatePicker.TimePicker = S.TimePicker;
