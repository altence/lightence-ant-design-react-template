import React from 'react';
import { Card } from '../../../components/common/Card';
import { ActivityChart } from './ActivityChart';
import { ActivityChartHeader } from './ActivityChartHeader';

export const ActivityChartCard: React.FC = () => {
  return (
    <Card title={<ActivityChartHeader />} padding="0">
      <ActivityChart />
    </Card>
  );
};
