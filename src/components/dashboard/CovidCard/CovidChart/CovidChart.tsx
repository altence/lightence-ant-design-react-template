import React, { useContext } from 'react';
import { BaseChart } from 'components/common/charts/BaseChart';
import { getMarkAreaData } from 'utils/utils';
import styled, { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { ChartData } from 'interfaces/interfaces';

const xAxisData = Array.from({ length: 30 }, (_, i) => i + 1);

export const CovidChart: React.FC<{ data: ChartData }> = ({ data }) => {
  const theme = useContext(ThemeContext);

  const option = {
    color: theme.colors.main.chartPrimaryGradient,
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: xAxisData,
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    series: [
      {
        data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.main.primary, 0.02),
          },
          data: getMarkAreaData(xAxisData),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.main.primary,
        },
      },
    ],
    tooltip: {
      trigger: 'axis', // TODO update tooltip
    },
  };

  return <Chart option={option} />;
};

const Chart = styled(BaseChart)`
  height: 100%;
  min-height: 400px;
`;
