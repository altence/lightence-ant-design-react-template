import React, { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts-for-react';
import { useResponsive } from 'hooks/useResponsive';
import ReactECharts from 'echarts-for-react';
import { Loading } from '../Loading';

interface ChartProps {
  option: EChartsOption;
  width?: string | number;
  height?: string | number;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  const [loading, setLoading] = useState(true);
  const { isTablet } = useResponsive();

  const chartHeight = height || (isTablet ? '300px' : '200px');

  useEffect(() => {
    // FIXME workaround to make sure that parent container is initialized before the chart
    setLoading(false);
  }, []);

  return loading ? <Loading /> : <ReactECharts option={option} style={{ height: chartHeight, width }} />;
};
