import React from 'react';
import { LinearGradientObject } from 'echarts';
import { BonesIcon } from '../components/dashboard/StatisticsCard/icons/BonesIcon';
import { FatIcon } from '../components/dashboard/StatisticsCard/icons/FatIcon';
import { ProteinIcon } from '../components/dashboard/StatisticsCard/icons/ProteinIcon';
import { WaterBalanceIcon } from '../components/dashboard/StatisticsCard/icons/WaterBalanceIcon';
import theme from '../styles/theme';

export interface Statistic {
  id: number;
  name: string;
  value: number;
  percent: number;
  icon: React.FC;
  isDowngrade: boolean;
  color: string;
  chartColor: LinearGradientObject;
}

export const statisticsData: Statistic[] = [
  {
    id: 1,
    name: 'dashboard.protein',
    value: 45,
    percent: 14,
    icon: ProteinIcon,
    isDowngrade: false,
    color: theme.colors.primary,
    chartColor: theme.colors.chartsPrimaryGradient,
  },
  {
    id: 2,
    name: 'dashboard.fat',
    value: 12,
    percent: 20,
    icon: FatIcon,
    isDowngrade: true,
    color: theme.colors.error,
    chartColor: theme.colors.chartsErrorGradient,
  },
  {
    id: 3,
    name: 'dashboard.bones',
    value: 90,
    percent: 34,
    icon: BonesIcon,
    isDowngrade: false,
    color: theme.colors.primaryAccent,
    chartColor: theme.colors.chartsPrimaryLightGradient,
  },
  {
    id: 4,
    name: 'dashboard.waterBalance',
    value: 78,
    percent: 21,
    icon: WaterBalanceIcon,
    isDowngrade: false,
    color: theme.colors.accent,
    chartColor: theme.colors.chartsAccentGradient,
  },
];
