import React from 'react';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { DayjsDatePicker } from './DayjsDatePicker';
import { AppDate } from 'constants/Dates';

type DatePickerProps = PickerProps<AppDate>;

export const DatePicker = React.forwardRef<React.Component<DatePickerProps>, DatePickerProps>(
  ({ className, ...props }, ref) => <DayjsDatePicker ref={ref} className={className} {...props} />,
);
