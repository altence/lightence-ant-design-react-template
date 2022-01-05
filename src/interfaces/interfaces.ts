import { NumericLiteral } from 'typescript';

export type Dimension = number | string;

export type ChartData = number[] | undefined;

export type xData = number[] | string[] | undefined;

export interface ChartSeries {
  seriesName: string;
  value: number;
  data: NumericLiteral;
  name: string;
}

export type ChartSeriesData = ChartSeries[];
