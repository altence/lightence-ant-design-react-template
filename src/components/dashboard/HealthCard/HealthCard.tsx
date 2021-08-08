import React from 'react';
import { Card } from '../../common/Card/Card';
import { HealthChart } from './HealthChart/HealthChart';

export const HealthCard: React.FC = () => {
  return (
    <Card title="Health">
      <HealthChart />
    </Card>
  );
};
