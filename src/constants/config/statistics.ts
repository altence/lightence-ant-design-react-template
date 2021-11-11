import { FC } from 'react';
import { BonesIcon } from 'components/dashboard/StatisticsCard/icons/BonesIcon';
import { FatIcon } from 'components/dashboard/StatisticsCard/icons/FatIcon';
import { ProteinIcon } from 'components/dashboard/StatisticsCard/icons/ProteinIcon';
import { WaterBalanceIcon } from 'components/dashboard/StatisticsCard/icons/WaterBalanceIcon';

export type StatisticColor = 'primary' | 'error' | 'secondary' | 'warning';

interface ConfigStatistic {
  id: number;
  name: string;
  color: StatisticColor;
  Icon: FC;
}

export const statistics: ConfigStatistic[] = [
  {
    id: 1,
    name: 'dashboard.protein',
    color: 'primary',
    Icon: ProteinIcon,
  },
  {
    id: 2,
    name: 'dashboard.fat',
    color: 'error',
    Icon: FatIcon,
  },
  {
    id: 3,
    name: 'dashboard.bones',
    color: 'secondary',
    Icon: BonesIcon,
  },
  {
    id: 4,
    name: 'dashboard.water',
    color: 'warning',
    Icon: WaterBalanceIcon,
  },
];
