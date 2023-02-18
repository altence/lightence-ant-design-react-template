import React, { useMemo } from 'react';
import { Dates } from 'constants/Dates';
import { BaseSelect, Option, BaseSelectProps } from '../BaseSelect/BaseSelect';

export const MonthSelect: React.FC<BaseSelectProps> = ({ className, ...props }) => {
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
    <BaseSelect className={className} {...props}>
      {monthsOptions}
    </BaseSelect>
  );
};
