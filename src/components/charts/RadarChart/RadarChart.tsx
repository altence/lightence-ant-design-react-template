import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { useResponsive } from 'hooks/useResponsive';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const RadarChart: React.FC = () => {
  const { t } = useTranslation();

  const { isTablet } = useResponsive();

  const option = {
    title: {
      text: 'Proportion of Browsers',
      top: 10,
      left: 10,
      show: isTablet,
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      type: 'scroll',
      bottom: 10,
      data: (function () {
        const list = [];
        for (let i = 1; i <= 28; i++) {
          list.push(i + 2000 + '');
        }
        return list;
      })(),
      show: isTablet,
    },
    visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true,
      show: isTablet,
    },
    radar: {
      indicator: [
        { text: 'IE8-', max: 400 },
        { text: 'IE9+', max: 400 },
        { text: 'Safari', max: 400 },
        { text: 'Firefox', max: 400 },
        { text: 'Chrome', max: 400 },
      ],
    },
    series: (function () {
      const series = [];
      for (let i = 1; i <= 28; i++) {
        series.push({
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
        });
      }
      return series;
    })(),
  };

  return (
    <Card title={t('charts.radar')}>
      <Chart option={option} />
    </Card>
  );
};
