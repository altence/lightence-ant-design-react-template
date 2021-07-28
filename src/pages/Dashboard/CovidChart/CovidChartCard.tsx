import React from 'react';
import { CovidChartHeader } from './CovidChartHeader';
import { CovidChart } from './CovidChart';
import { Card } from '../../../components/common/Card';

export const CovidChartCard: React.FC = () => {
  return (
    <Card title={<CovidChartHeader />} padding="0">
      <CovidChart />
    </Card>
  );
};
