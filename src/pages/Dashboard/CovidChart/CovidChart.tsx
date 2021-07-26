import React from 'react';
import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';
import theme from '../../../styles/theme';

const option = {
  color: theme.colors.primaryGradient,
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: Array.from({ length: 30 }, (_, i) => i + 1),
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  series: [
    {
      data: [
        820, 600, 700, 400, 600, 800, 700, 750, 500, 600, 700, 600, 800, 500, 700, 800, 850, 600, 400, 300, 450, 700,
        400, 410, 420, 430, 480, 500, 360, 320,
      ],
      type: 'line',
      smooth: true,
      areaStyle: {},
      showSymbol: false,
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};

export const CovidChart: React.FC = () => {
  return <CovidChartStyled option={option} />;
};

const CovidChartStyled = styled(ReactECharts)`
  position: relative;
  width: 100%;
  height: 400px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.secondary};
  }
`;
