import React, { useContext } from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { ThemeContext } from 'styled-components';

const data = [
  [10.0, 8.04],
  [8.0, 6.95],
  [13.0, 7.58],
  [9.0, 8.81],
  [11.0, 8.33],
  [14.0, 9.96],
  [6.0, 7.24],
  [4.0, 4.26],
  [12.0, 10.84],
  [7.0, 4.82],
  [5.0, 5.68],
];

const markLineOpt = {
  animation: false,
  lineStyle: {
    width: 0,
  },
  data: [
    [
      {
        coord: [0, 3],
        symbol: 'none',
      },
      {
        coord: [20, 13],
        symbol: 'none',
      },
    ],
  ],
};

export const ScatterChart: React.FC = () => {
  const theme = useContext(ThemeContext);
  const option = {
    color: theme.colors.main.primary,
    grid: {
      top: 10,
      right: 10,
      bottom: 0,
      left: 5,
      containLabel: true,
    },
    tooltip: {
      formatter: 'Group {a}: ({c})',
    },
    xAxis: [{ gridIndex: 0, min: 0, max: 20 }],
    yAxis: [{ gridIndex: 0, min: 0, max: 15 }],
    series: [
      {
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: data,
        markLine: markLineOpt,
      },
    ],
  };

  return (
    <Card padding="1.875rem 0.625rem 1.25rem 0.625rem">
      <Chart option={option} height="20rem" />
    </Card>
  );
};
