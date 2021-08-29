import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/common/Card/Card';
import { ActivityChart } from './ActivityChart/ActivityChart';

export const ActivityCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card id="activity" title={t('dashboard.activity')} padding={0}>
      <ActivityChart />
    </Card>
  );
};
