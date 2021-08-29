import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../common/Card/Card';
import { HealthChart } from './HealthChart/HealthChart';

export const HealthCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card title={t('dashboard.health.title')} padding={0}>
      <HealthChart />
    </Card>
  );
};
