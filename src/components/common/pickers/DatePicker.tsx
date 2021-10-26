import React from 'react';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { LocalizedDatePicker } from './LocalizedDatePicker';
import { AppDate } from 'constants/Dates';
import { useResponsive } from 'hooks/useResponsive';

type DatePickerProps = PickerProps<AppDate>;

export const DatePicker: React.FC<DatePickerProps> = ({ className, ...props }) => {
  const { isTablet } = useResponsive();

  return <LocalizedDatePicker size={(isTablet && 'large') || 'middle'} className={className} {...props} />;
};
