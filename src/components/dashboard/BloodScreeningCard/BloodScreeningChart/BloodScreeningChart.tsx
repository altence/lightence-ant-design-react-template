import React, { useContext } from 'react';
import { EChartsInstance } from 'echarts-for-react';
import * as echarts from 'echarts';
import { ThemeContext } from 'styled-components';
import { BaseChart } from '../../../common/charts/BaseChart';
import { Dates } from '../../../../constants/Dates';
import { Cell } from '../BloodScreeningTable/BloodScreeningTable';
import { useResponsive } from 'hooks/useResponsive';

interface BloodScreeningChartsProps {
  activeItem: Cell;
}

export const BloodScreeningChart: React.FC<BloodScreeningChartsProps> = ({ activeItem }) => {
  const themeContext = useContext(ThemeContext);

  const { isTablet, isBigScreen } = useResponsive();

  const months = Dates.getMonths();

  const option = {
    grid: {
      top: 27,
      bottom: 0,
      left: -20,
      right: -20,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (label: EChartsInstance) {
        return `${label[0].axisValue}`;
      },
      axisPointer: {
        show: false,
        lineStyle: {
          width: 0,
        },
      },
    },
    xAxis: {
      type: 'category',
      data: months,
      show: false,
      lineStyle: {
        width: 0,
      },
    },
    yAxis: {
      type: 'value',
      show: false,
      lineStyle: {
        width: 0,
      },
    },
    series: [
      {
        data: activeItem.data,
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            opacity: 0,
          },
          emphasis: {
            color: themeContext.colors.main.error,
            borderColor: themeContext.colors.main.mainBackground,
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.05)',
            shadowOffsetX: 0,
            shadowOffsetY: 5,
            opacity: 1,
          },
        },
        symbolSize: 18,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(252, 120, 122, 0.79)',
            },
            {
              offset: 1,
              color: 'rgba(248, 251, 255, 0)',
            },
          ]),
        },
        lineStyle: {
          width: 2,
          color: themeContext.colors.main.error,
        },
      },
    ],
  };

  return <BaseChart option={option} height={(isBigScreen && 200) || (isTablet && 200) || 100} />;
};
