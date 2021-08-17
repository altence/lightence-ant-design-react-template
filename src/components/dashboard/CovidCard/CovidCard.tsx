import React from 'react';
import { Card } from '../../../components/common/Card/Card';
import { CovidChart } from './CovidChart/CovidChart';

export const CovidCard: React.FC = () => {
  return (
    <Card title="COVID-19" padding={0}>
      <CovidChart />
    </Card>
  );
};
