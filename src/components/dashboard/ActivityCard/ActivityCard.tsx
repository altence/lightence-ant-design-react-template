import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/common/Card/Card';
import { ActivityChart } from './ActivityChart/ActivityChart';
import { ChartData } from 'interfaces/interfaces';

export const ActivityCard: React.FC = () => {
  const [data] = useState<ChartData>([41, 45, 52, 63, 58, 55, 71]);

  const { t } = useTranslation();

  return (
    <Card id="activity" title={t('dashboard.activity')} padding={0}>
      <ActivityChart data={data} />
    </Card>
  );
};
