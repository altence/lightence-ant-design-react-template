import React from 'react';
import { BonesIcon } from '../components/dashboard/StatisticsCard/icons/BonesIcon';
import { FatIcon } from '../components/dashboard/StatisticsCard/icons/FatIcon';
import { ProteinIcon } from '../components/dashboard/StatisticsCard/icons/ProteinIcon';
import { WaterBalanceIcon } from '../components/dashboard/StatisticsCard/icons/WaterBalanceIcon';

export interface Statistic {
  id: number;
  name: string;
  value: number;
  percent: number;
  icon: React.FC;
  isDowngrade: boolean;
  color: string;
  chartColor: string;
}

export const statisticsData: Statistic[] = [
  {
    id: 1,
    name: 'dashboard.protein',
    value: 45,
    percent: 14,
    icon: ProteinIcon,
    isDowngrade: false,
    color: 'primary',
    chartColor: 'chartsPrimaryGradient',
  },
  {
    id: 2,
    name: 'dashboard.fat',
    value: 12,
    percent: 20,
    icon: FatIcon,
    isDowngrade: true,
    color: 'error',
    chartColor: 'chartsErrorGradient',
  },
  {
    id: 3,
    name: 'dashboard.bones',
    value: 90,
    percent: 34,
    icon: BonesIcon,
    isDowngrade: false,
    color: 'primaryAccent',
    chartColor: 'chartsPrimaryLightGradient',
  },
  {
    id: 4,
    name: 'dashboard.waterBalance',
    value: 78,
    percent: 21,
    icon: WaterBalanceIcon,
    isDowngrade: false,
    color: 'accent',
    chartColor: 'chartsAccentGradient',
  },
];
