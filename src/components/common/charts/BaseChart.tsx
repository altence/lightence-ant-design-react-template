import React, { CSSProperties, useEffect, useState } from 'react';
import { EChartsOption } from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import { Loading } from '../Loading';
import { DefaultTheme, useTheme } from 'styled-components';

export interface BaseChartProps {
  option?: EChartsOption;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEvents?: Record<string, (e: any) => void>;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  classname?: string;
}

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

export const getChartColors = (theme: DefaultTheme): string[] => [
  theme.colors.charts.color1,
  theme.colors.charts.color2,
  theme.colors.charts.color3,
  theme.colors.charts.color4,
  theme.colors.charts.color5,
];

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
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const chartHeight = height || '400px';

  const defaultOption = {
    color: getChartColors(theme),
  };

  useEffect(() => {
    // TODO FIXME workaround to make sure that parent container is initialized before the chart
    setTimeout(() => {
      setLoading(false);
    }, 1000 / 2);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ReactECharts
      {...props}
      option={{ ...defaultOption, ...option }}
      style={{ ...style, height: chartHeight, minHeight: height === '100%' ? 400 : 'unset', width, zIndex: 0 }}
      onEvents={onEvents}
    />
  );
};
