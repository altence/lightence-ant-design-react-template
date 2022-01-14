import React, { useContext } from 'react';
import { BaseChart, BaseChartProps } from 'components/common/charts/BaseChart';
import { ThemeContext } from 'styled-components';
import { EChartsOption } from 'echarts-for-react';

interface PieChartProps extends BaseChartProps {
  option?: EChartsOption;
  // eslint-disable-next-line
  data?: any;
  name?: string;
  showLegend?: boolean;
}

export const PieChart: React.FC<PieChartProps> = ({ option, data, name, showLegend, ...props }) => {
  const theme = useContext(ThemeContext);
  const defaultPieOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: showLegend,
      top: '0%',
      left: 16,
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
          borderColor: theme.commonColors.white,
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
            color: theme.colors.text.main,
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
