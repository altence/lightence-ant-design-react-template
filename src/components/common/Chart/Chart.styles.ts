import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';

export interface ChartProps {
  width?: string | number;
  height?: string | number | false;
}

export const Chart = styled(ReactECharts)<ChartProps>`
  flex-shrink: 0;

  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};

  height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height)} !important;
`;
