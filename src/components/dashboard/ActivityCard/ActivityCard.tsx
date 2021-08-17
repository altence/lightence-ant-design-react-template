import React from 'react';
import { Card } from '../../../components/common/Card/Card';
import { ActivityChart } from './ActivityChart/ActivityChart';

export const ActivityCard: React.FC = () => {
  return (
    <Card title="Activity" padding={0}>
      <ActivityChart />
    </Card>
  );
};
