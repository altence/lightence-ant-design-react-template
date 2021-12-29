import React, { CSSProperties, useEffect, useState } from 'react';
import { EChartsOption } from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import { Loading } from '../Loading';
import { getChartColors } from '@app/styles/theme';
import { DefaultTheme } from 'styled-components';

export interface BaseChartProps {
  option?: EChartsOption;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEvents?: Record<string, (e: any) => void>;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  classname?: string;
}

const defaultOption = {
  color: getChartColors(),
};

interface DefaultTooltipStyles {
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  textStyle: {
    fontWeight: number;
    fontSize: number;
    color: string;
  };
}

export const getDefaultTooltipStyles = (theme: DefaultTheme): DefaultTooltipStyles => ({
  borderColor: theme.colors.charts.color1,
  borderWidth: 2,
  borderRadius: Number.parseInt(theme.border.radius),
  textStyle: {
    fontWeight: 600,
    fontSize: 16,
    color: theme.colors.charts.color1,
  },
});

export const BaseChart: React.FC<BaseChartProps> = ({ option, width, height, onEvents, style, ...props }) => {
  const [loading, setLoading] = useState(true);

  const chartHeight = height || '400px';

  useEffect(() => {
    // FIXME workaround to make sure that parent container is initialized before the chart
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ReactECharts
      {...props}
      option={{ ...defaultOption, ...option }}
      style={{ ...style, height: chartHeight, minHeight: height === '100%' ? 400 : 'unset', width }}
      onEvents={onEvents}
    />
  );
};
