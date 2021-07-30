import React from 'react';
import { Card } from '../../../components/common/Card';
import { HealthChart } from './HealthChart';
import { HealthChartHeader } from './HealthChartHeader';

export const HealthChartCard: React.FC = () => {
  return (
    <Card title={<HealthChartHeader />}>
      <HealthChart />
    </Card>
  );
};
