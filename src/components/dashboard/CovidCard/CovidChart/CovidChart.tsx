import React, { useContext } from 'react';
import { BaseChart, getDefaultTooltipStyles } from 'components/common/charts/BaseChart';
import { getMarkAreaData } from 'utils/utils';
import { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { ChartData, xData } from 'interfaces/interfaces';
import { useResponsive } from '@app/hooks/useResponsive';

interface CovidData {
  title: string;
  data: ChartData;
}

export const CovidChart: React.FC<{
  confirmedArr: CovidData;
  deathsArr: CovidData;
  recoveredArr: CovidData;
  dateArr: xData;
}> = ({ confirmedArr, deathsArr, recoveredArr, dateArr }) => {
  const theme = useContext(ThemeContext);

  const { isDesktop } = useResponsive();

  const option = {
    color: [
      theme.colors.main.chartPrimaryGradient,
      theme.colors.main.chartSecondaryGradient,
      theme.colors.main.chartAdditionalGradient,
    ],
    legend: {
      left: '10%',
      top: '10%',
      orient: 'vertical',
      textStyle: {
        fontSize: 16,
        padding: 10,
      },
    },
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
      data: dateArr,
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    series: [
      {
        name: confirmedArr.title,
        data: confirmedArr.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color1, 0.02),
          },
          data: dateArr && getMarkAreaData(dateArr),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color1,
        },
      },
      {
        name: deathsArr.title,
        data: deathsArr.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color5, 0.02),
          },
          data: dateArr && getMarkAreaData(dateArr),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color5,
        },
      },
      {
        name: recoveredArr.title,
        data: recoveredArr.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color4, 0.02),
          },
          data: dateArr && getMarkAreaData(dateArr),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color4,
        },
      },
      {
        data: [
          { name: confirmedArr.title, value: confirmedArr.data },
          { name: deathsArr.title, value: deathsArr.data },
          { name: recoveredArr.title, value: recoveredArr.data },
        ],
        label: {
          show: isDesktop,
        },
        type: 'pie',
        radius: '30%',
        center: ['70%', '25%'],
        emphasis: {
          show: false,
        },
      },
    ],
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
    },
  };

  return <BaseChart option={option} height="100%" />;
};
