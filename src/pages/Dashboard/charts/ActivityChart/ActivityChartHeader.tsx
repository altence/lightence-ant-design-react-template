import React from 'react';
import { MonthSwitch } from '../../../../components/common/MonthSwitch';
import { ChartHeader } from '../../../../components/common/ChartHeader';

export const ActivityChartHeader: React.FC = () => {
  return (
    <ChartHeader title="Activity">
      <MonthSwitch />
    </ChartHeader>
  );
};
