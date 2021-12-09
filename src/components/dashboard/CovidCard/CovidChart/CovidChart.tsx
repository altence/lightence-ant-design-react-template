import React, { useContext } from 'react';
import { BaseChart, getDefaultTooltipStyles } from 'components/common/charts/BaseChart';
import { getMarkAreaData } from 'utils/utils';
import styled, { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { ChartData, ChartSeriesData } from 'interfaces/interfaces';
import { Dates } from 'constants/Dates';
import { useTranslation } from 'react-i18next';

export const CovidChart: React.FC<{ data: ChartData }> = ({ data }) => {
  const theme = useContext(ThemeContext);

  const { t } = useTranslation();

  const months = Dates.getMonths();

  const option = {
    color: theme.colors.charts.chartPrimaryGradient,
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
      data: months,
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
            color: hexToRGB(theme.colors.charts.color1, 0.02),
          },
          data: getMarkAreaData(months),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color1,
        },
      },
    ],
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
      formatter: (data: ChartSeriesData) => {
        const currentItem = data[0];

        return `${currentItem.value} ${t('dashboard.covid.casesPerDay')} ${currentItem.name} 2020`;
      },
    },
  };

  return <Chart option={option} />;
};

const Chart = styled(BaseChart)`
  height: 100%;
  min-height: 400px;
`;
