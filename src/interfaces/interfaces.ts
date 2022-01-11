import { NumericLiteral } from 'typescript';

export type Dimension = number | string;

export type ChartData = number[];

export type xData = number[] | string[];

export interface ChartSeries {
  seriesName: string;
  value: number;
  data: NumericLiteral;
  name: string;
}

export type ChartSeriesData = ChartSeries[];

export type Severity = 'success' | 'error' | 'info' | 'warning';
