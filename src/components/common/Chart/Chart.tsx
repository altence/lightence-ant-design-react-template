import React, { useContext, useEffect, useState } from 'react';
import { EChartsOption } from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import { Loading } from '../Loading';
import { ThemeContext } from 'styled-components';

interface ChartProps {
  option: EChartsOption;
  width?: string | number;
  height?: string | number;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  const [loading, setLoading] = useState(true);

  const chartHeight = height || '400px';

  useEffect(() => {
    // FIXME workaround to make sure that parent container is initialized before the chart
    setLoading(false);
  }, []);

  const theme = useContext(ThemeContext);
  const color = [
    theme.colors.charts.color1,
    theme.colors.charts.color2,
    theme.colors.charts.color3,
    theme.colors.charts.color4,
    theme.colors.charts.color5,
  ];

  const defaultOption = {
    color,
  };

  return loading ? (
    <Loading />
  ) : (
    <ReactECharts option={{ ...defaultOption, ...option }} style={{ height: chartHeight, width }} />
  );
};
