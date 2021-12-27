import React from 'react';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { DayjsDatePicker } from './DayjsDatePicker';
import { AppDate } from 'constants/Dates';

type DatePickerProps = PickerProps<AppDate>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DatePicker = React.forwardRef<any, DatePickerProps>(({ className, ...props }, ref) => (
  <DayjsDatePicker ref={ref} className={className} {...props} />
));
