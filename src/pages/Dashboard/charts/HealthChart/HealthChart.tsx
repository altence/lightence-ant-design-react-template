import React from 'react';
import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';
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
  legend: {
    orient: 'vertical',
    right: 0,
    top: 100,
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
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
  return <HealthChartStyled option={option} />;
};

const HealthChartStyled = styled(ReactECharts)`
  width: 100%;
`;
