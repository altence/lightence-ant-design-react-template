import React, { useContext } from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';

export const PieChart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '0%',
      left: 16,
    },
    series: [
      {
        name: t('charts.visitorsFrom'),
        type: 'pie',
        top: '25%',
        radius: ['55%', '100%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: theme.commonColors.white,
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
    <Card padding="0 0 1.875rem" title={t('charts.pie')}>
      <Chart option={option} />
    </Card>
  );
};
