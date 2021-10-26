import React, { useContext } from 'react';
import { Chart } from '../../../common/Chart/Chart';
import { getMarkAreaData } from '../../../../helpers/getMarkAreaData';
import { ThemeContext } from 'styled-components';
import { useResponsive } from 'hooks/useResponsive';

const xAxisData = Array.from({ length: 30 }, (_, i) => i + 1);

export const CovidChart: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const { isTablet } = useResponsive();

  const option = {
    color: themeContext.colors.chartsPrimaryGradient,
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
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: themeContext.colors.primaryAlpha,
          },
          data: getMarkAreaData(xAxisData),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <Chart option={option} height={isTablet && '100%'} />;
};
