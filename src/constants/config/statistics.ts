import { FC } from 'react';
import { BonesIcon } from 'components/dashboard/statisticsCards/statisticsCard/icons/BonesIcon';
import { FatIcon } from 'components/dashboard/statisticsCards/statisticsCard/icons/FatIcon';
import { ProteinIcon } from 'components/dashboard/statisticsCards/statisticsCard/icons/ProteinIcon';
import { WaterBalanceIcon } from 'components/dashboard/statisticsCards/statisticsCard/icons/WaterBalanceIcon';

export type StatisticColor = 'primary' | 'error' | 'secondary' | 'warning';

interface ConfigStatistic {
  id: number;
  name: string;
  title: string;
  color: StatisticColor;
  Icon: FC;
}

export const statistics: ConfigStatistic[] = [
  {
    id: 1,
    name: 'protein',
    title: 'dashboard.protein',
    color: 'primary',
    Icon: ProteinIcon,
  },
  {
    id: 2,
    name: 'fat',
    title: 'dashboard.fat',
    color: 'error',
    Icon: FatIcon,
  },
  {
    id: 3,
    name: 'bones',
    title: 'dashboard.bones',
    color: 'secondary',
    Icon: BonesIcon,
  },
  {
    id: 4,
    name: 'water',
    title: 'dashboard.water',
    color: 'warning',
    Icon: WaterBalanceIcon,
  },
];
