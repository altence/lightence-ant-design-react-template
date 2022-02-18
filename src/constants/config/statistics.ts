import { FC } from 'react';
import { BonesIcon } from 'components/medical-dashboard/statisticsCards/statisticsCard/icons/BonesIcon';
import { FatIcon } from 'components/medical-dashboard/statisticsCards/statisticsCard/icons/FatIcon';
import { ProteinIcon } from 'components/medical-dashboard/statisticsCards/statisticsCard/icons/ProteinIcon';
import { WaterBalanceIcon } from 'components/medical-dashboard/statisticsCards/statisticsCard/icons/WaterBalanceIcon';

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
    title: 'medical-dashboard.protein',
    color: 'primary',
    Icon: ProteinIcon,
  },
  {
    id: 2,
    name: 'fat',
    title: 'medical-dashboard.fat',
    color: 'error',
    Icon: FatIcon,
  },
  {
    id: 3,
    name: 'bones',
    title: 'medical-dashboard.bones',
    color: 'secondary',
    Icon: BonesIcon,
  },
  {
    id: 4,
    name: 'water',
    title: 'medical-dashboard.water',
    color: 'warning',
    Icon: WaterBalanceIcon,
  },
];
