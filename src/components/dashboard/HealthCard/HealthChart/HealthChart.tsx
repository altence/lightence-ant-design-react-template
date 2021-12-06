import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart } from '../../../common/charts/PieChart';
import { Legend } from '../../../common/charts/Legend/Legend';
import { healthChartData } from 'constants/healthChartData';

export const HealthChart: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const onMouseOver = useCallback(({ dataIndex }) => setActiveItemIndex(dataIndex), [setActiveItemIndex]);
  const onMouseOut = useCallback(() => setActiveItemIndex(null), [setActiveItemIndex]);

  const onEvents = {
    mouseover: onMouseOver,
    mouseout: onMouseOut,
  };

  const chartData = healthChartData.map((item) => ({
    ...item,
    title: t(item.title),
    description: t(item.description),
  }));

  return (
    <>
      <PieChart data={chartData} name={t('dashboard.health.title')} onEvents={onEvents} />
      <Legend legendItems={chartData} activeItemIndex={activeItemIndex} />
    </>
  );
};
