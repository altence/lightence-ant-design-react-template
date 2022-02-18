import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChartCustomLegend } from '../../common/charts/PieChartCustomLegend';
import { healthChartData } from 'constants/healthChartData';
import { Card } from '@app/components/common/Card/Card';

export const HealthCard: React.FC = () => {
  const { t } = useTranslation();

  const chartData = healthChartData.map((item) => ({
    ...item,
    name: t(item.name),
    description: t(item.description),
  }));

  const legendData = chartData.map((item) => ({ ...item, value: `${item.value}%` }));

  return (
    <Card title={t('medical-dashboard.health.title')} padding={'0 1.25rem 1.875rem'}>
      <PieChartCustomLegend
        name={t('medical-dashboard.health.title')}
        chartData={chartData}
        legendData={legendData}
        height="300px"
      />
    </Card>
  );
};
