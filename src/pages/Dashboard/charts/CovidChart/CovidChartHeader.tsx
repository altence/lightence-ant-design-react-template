import React from 'react';
import { ChartHeader } from '../../../../components/common/ChartHeader';
import { MonthSelect } from '../../../../components/common/MonthSelect';

export const CovidChartHeader: React.FC = () => {
  return (
    <ChartHeader title="COVID-19">
      <MonthSelect />
    </ChartHeader>
  );
};
