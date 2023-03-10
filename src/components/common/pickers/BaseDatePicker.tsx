import React from 'react';
import { DatePicker } from 'antd';
import type { DatePickerProps as BaseDatePickerProps } from 'antd';
import styled from 'styled-components';

export type { BaseDatePickerProps };

const StyledDatePicker = styled(DatePicker)`
  & input {
    font-family: inherit;
  }
`;

export const BaseDatePicker = React.forwardRef<React.Component<BaseDatePickerProps>, BaseDatePickerProps>(
  ({ className, ...props }, ref) => <StyledDatePicker ref={ref} className={className} {...props} />,
);
