/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import { Loading } from '../Loading';
import { getChartColors } from '../../../styles/theme';

export interface BaseChartProps {
  option?: EChartsOption;
  onEvents?: Record<string, (e: any) => void>;
  width?: string | number;
  height?: string | number;
}

const defaultOption = {
  color: getChartColors(),
};

export const BaseChart: React.FC<BaseChartProps> = ({ option, width, height, onEvents }) => {
  const [loading, setLoading] = useState(true);

  const chartHeight = height || '400px';

  useEffect(() => {
    // FIXME workaround to make sure that parent container is initialized before the chart
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ReactECharts option={{ ...defaultOption, ...option }} style={{ height: chartHeight, width }} onEvents={onEvents} />
  );
};
