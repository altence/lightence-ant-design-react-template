import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import { BaseChart, BaseChartProps } from '@app/components/common/charts/BaseChart';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';
import { BASE_COLORS } from '@app/styles/themes/constants';

interface PieChartProps extends BaseChartProps {
  option?: EChartsOption;
  // eslint-disable-next-line
  data?: any;
  name?: string;
  showLegend?: boolean;
}

export const PieChart: React.FC<PieChartProps> = ({ option, data, name, showLegend, ...props }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const defaultPieOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: showLegend,
      top: '0%',
      left: 16,
      textStyle: {
        color: themeObject[theme].textMain,
      },
    },
    series: [
      {
        name,
        type: 'pie',
        top: showLegend ? '25%' : '10%',
        bottom: '5%',
        radius: ['55%', '100%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: BASE_COLORS.white,
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
            color: themeObject[theme].textMain,
          },
        },
        labelLine: {
          show: false,
        },
        data,
      },
    ],
  };
  return <BaseChart {...props} option={{ ...defaultPieOption, ...option }} />;
};
