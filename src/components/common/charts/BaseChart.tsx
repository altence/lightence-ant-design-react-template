import React, { CSSProperties, useEffect, useState } from 'react';
import { EChartsOption } from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import { Loading } from '../Loading';
import { getChartColors } from '@app/styles/theme';

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
      style={{ ...style, height: chartHeight, width }}
      onEvents={onEvents}
    />
  );
};
