import React, { useMemo } from 'react';
import { Dates } from 'constants/Dates';
import { Select, Option, SelectProps } from '../Select/Select';

export const MonthSelect: React.FC<SelectProps> = ({ className, ...props }) => {
  const months = Dates.getMonths();

  const monthsOptions = useMemo(
    () =>
      months.map((month, index) => (
        <Option key={index} value={index}>
          {month}
        </Option>
      )),
    [months],
  );

  return (
    <Select className={className} {...props}>
      {monthsOptions}
    </Select>
  );
};
