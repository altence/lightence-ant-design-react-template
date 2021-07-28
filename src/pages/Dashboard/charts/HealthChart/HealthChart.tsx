import React from 'react';
import { Chart } from '../../../../components/common/Chart';
import theme from '../../../../styles/theme';

const option = {
  color: [
    theme.colors.secondaryGradient,
    theme.colors.additionallyGradient,
    theme.colors.primaryGradient,
    theme.colors.additionally,
  ],
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      radius: [70, 120],
      center: ['50%', '50%'],
      labelLine: false,
      data: [
        { value: 72, name: 'Lifestyle' },
        { value: 50, name: 'Ecology' },
        { value: 70, name: 'Genetics' },
        { value: 20, name: 'Unknown' },
      ],
    },
  ],
};

export const HealthChart: React.FC = () => {
  return <Chart option={option} />;
};
