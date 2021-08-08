import React from 'react';
import { BonesIcon } from '../components/dashboard/StatisticsCard/icons/BonesIcon';
import { FatIcon } from '../components/dashboard/StatisticsCard/icons/FatIcon';
import { ProteinIcon } from '../components/dashboard/StatisticsCard/icons/ProteinIcon';
import { WaterBalanceIcon } from '../components/dashboard/StatisticsCard/icons/WaterBalanceIcon';
import { WeightIcon } from '../components/dashboard/StatisticsCard/icons/WeightIcon';

interface Statistic {
  id: number;
  title: string;
  value: number;
  percent: number;
  icon: React.FC;
  isDowngrade: boolean;
}

export const statisticsData: Statistic[] = [
  {
    id: 1,
    title: 'Protein',
    value: 45,
    percent: 14,
    icon: ProteinIcon,
    isDowngrade: false,
  },
  {
    id: 2,
    title: 'Fat',
    value: 12,
    percent: 20,
    icon: FatIcon,
    isDowngrade: true,
  },
  {
    id: 3,
    title: 'Bones',
    value: 90,
    percent: 34,
    icon: BonesIcon,
    isDowngrade: false,
  },
  {
    id: 4,
    title: 'Water balance',
    value: 78,
    percent: 21,
    icon: WaterBalanceIcon,
    isDowngrade: false,
  },
  {
    id: 5,
    title: 'Weight',
    value: 68,
    percent: 30,
    icon: WeightIcon,
    isDowngrade: false,
  },
];
