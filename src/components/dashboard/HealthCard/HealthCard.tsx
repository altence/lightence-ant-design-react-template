import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../common/Card/Card';
import { PieChartCustomLegend } from '../../common/charts/PieChartCustomLegend';
import { healthChartData } from 'constants/healthChartData';

export const HealthCard: React.FC = () => {
  const { t } = useTranslation();

  const chartData = healthChartData.map((item) => ({
    ...item,
    name: t(item.name),
    description: t(item.description),
  }));

  const legendData = chartData.map((item) => ({ ...item, value: `${item.value}%` }));

  return (
    <Card title={t('dashboard.health.title')} padding={'0 1.25rem 1.875rem'}>
      <PieChartCustomLegend
        name={t('dashboard.health.title')}
        chartData={chartData}
        legendData={legendData}
        height="300px"
      />
    </Card>
  );
};
