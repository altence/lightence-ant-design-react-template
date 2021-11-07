import React from 'react';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { DayjsDatePicker } from './DayjsDatePicker';
import { AppDate } from 'constants/Dates';

type DatePickerProps = PickerProps<AppDate>;

export const DatePicker: React.FC<DatePickerProps> = ({ className, ...props }) => (
  <DayjsDatePicker className={className} {...props} />
);
