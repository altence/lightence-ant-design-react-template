import React from 'react';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';
import { LocalizedDatePicker } from './LocalizedDatePicker';
import { AppDate } from 'constants/Dates';

type DatePickerProps = PickerProps<AppDate>;

export const DatePicker: React.FC<DatePickerProps> = ({ className, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return <LocalizedDatePicker size={(isTablet && 'large') || 'middle'} className={className} {...props} />;
};
