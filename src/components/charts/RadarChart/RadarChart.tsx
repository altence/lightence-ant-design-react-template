import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { useResponsive } from 'hooks/useResponsive';

export const RadarChart: React.FC = () => {
  const { t } = useTranslation();

  const { isDesktop, isBigScreen } = useResponsive();

  const radiusValue = isBigScreen ? '75%' : isDesktop ? '70%' : '50%';

  const chartPosition = ['center', isDesktop ? '50%' : '45%'];

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      type: 'scroll',
      bottom: 0,
      data: Array.from({ length: 29 }, (_, i) => `${2000 + i}`),
    },
    visualMap: {
      top: 'middle',
      right: -10,
      color: ['red', 'yellow'],
      calculable: true,
    },
    radar: {
      indicator: [
        { text: 'IE8-', max: 400 },
        { text: 'IE9+', max: 400 },
        { text: 'Safari', max: 400 },
        { text: 'Firefox', max: 400 },
        { text: 'Chrome', max: 400 },
      ],
      radius: radiusValue,
      center: chartPosition,
    },
    series: Array.from({ length: 29 }, (_, i) => {
      return {
        type: 'radar',
        symbol: 'none',
        lineStyle: {
          width: 1,
        },
        emphasis: {
          areaStyle: {
            color: 'rgba(0,250,0,0.3)',
          },
        },
        data: [
          {
            value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
            name: i + 2000 + '',
          },
        ],
      };
    }),
  };

  return (
    <Card title={t('charts.radar')}>
      <Chart option={option} />
    </Card>
  );
};
