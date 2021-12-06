import { PieChart } from './PieChart';
import { Legend, LegendItem } from './Legend/Legend';
import React, { useCallback, useState } from 'react';
import { EChartsOption } from 'echarts-for-react';

interface PieChartCustomLegend {
  name: string;
  // eslint-disable-next-line
  chartData: any[];
  // eslint-disable-next-line
  legendData: LegendItem[];
  height?: string;
  width?: string;
  option?: EChartsOption;
}

export const PieChartCustomLegend: React.FC<PieChartCustomLegend> = ({
  chartData,
  name,
  legendData,
  height,
  width,
  ...rest
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const onMouseOver = useCallback(({ dataIndex }) => setActiveItemIndex(dataIndex), [setActiveItemIndex]);
  const onMouseOut = useCallback(() => setActiveItemIndex(null), [setActiveItemIndex]);

  const onEvents = {
    mouseover: onMouseOver,
    mouseout: onMouseOut,
  };

  return (
    <>
      <PieChart
        data={chartData}
        name={name}
        showLegend={false}
        height={height}
        width={width}
        onEvents={onEvents}
        {...rest}
      />
      <Legend legendItems={legendData} activeItemIndex={activeItemIndex} />
    </>
  );
};
