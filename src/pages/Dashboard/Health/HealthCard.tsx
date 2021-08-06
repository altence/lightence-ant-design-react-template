import React from 'react';
import { Card } from '../../../components/common/Card/Card';
import { HealthChart } from './HealthChart';

export const HealthCard: React.FC = () => {
  return (
    <Card title="Health">
      <HealthChart />
    </Card>
  );
};
