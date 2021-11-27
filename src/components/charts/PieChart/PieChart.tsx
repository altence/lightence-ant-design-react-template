import React from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { useTranslation } from 'react-i18next';

export const PieChart: React.FC = () => {
  const { t } = useTranslation();
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '0%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        top: '25%',
        radius: ['55%', '100%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: t('charts.search') },
          { value: 735, name: t('charts.direct') },
          { value: 580, name: t('charts.email') },
          { value: 484, name: t('charts.union') },
          { value: 300, name: t('charts.video') },
        ],
      },
    ],
  };
  return (
    <Card padding="1.875rem 0">
      <Chart option={option} height={'100%'} />
    </Card>
  );
};
