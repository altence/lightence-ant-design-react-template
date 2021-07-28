import React from 'react';
import { MonthSwitch } from '../../../../components/common/MonthSwitch';
import { ChartHeader } from '../../../../components/common/ChartHeader';

export const HealthChartHeader: React.FC = () => {
  return (
    <ChartHeader title="Health">
      <MonthSwitch />
    </ChartHeader>
  );
};
