import React from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';

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
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
};

export const PieChart: React.FC = () => {
  return (
    <Card padding="30px 0">
      <Chart option={option} height={'100%'} />
    </Card>
  );
};
