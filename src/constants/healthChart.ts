import { LinearGradientObject } from 'echarts';
import theme from '../styles/theme';

interface HealthChartItem {
  id: number;
  title: string;
  description: string;
  value: number;
  color: string;
  chartColor: LinearGradientObject | string;
}

export const healthChartData: HealthChartItem[] = [
  {
    id: 1,
    title: 'Lifestyle',
    description: 'Without new treatments, the W.H.O. says, the number of new cancer patients.',
    value: 72,
    color: theme.colors.error,
    chartColor: theme.colors.chartsSecondaryGradient,
  },
  {
    id: 1,
    title: 'Ecology',
    description: 'Without new treatments, the W.H.O. says, the number of new cancer patients.',
    value: 50,
    color: theme.colors.accentDark,
    chartColor: theme.colors.chartsAdditionallyGradient,
  },
  {
    id: 1,
    title: 'Genetics',
    description: 'Without new treatments, the W.H.O. says, the number of new cancer patients.',
    value: 70,
    color: theme.colors.primary,
    chartColor: theme.colors.chartsPrimaryGradient,
  },
  {
    id: 1,
    title: 'Some info',
    description: 'Some info',
    value: 20,
    color: theme.colors.basicLight,
    chartColor: theme.colors.basicLight,
  },
];
