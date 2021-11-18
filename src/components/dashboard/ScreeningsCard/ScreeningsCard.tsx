import React from 'react';
import { ScreeningsHeader } from './ScreeningsHeader/ScreeningsHeader';
import { ScreeningsFriends } from './ScreeningsFriends/ScreeningsFriends';
import { ScreeningsChart } from './ScreeningsChart/ScreeningsChart';
import { DashboardCard } from '../DashboardCard/DashboardCard';

export const ScreeningsCard: React.FC = () => {
  return (
    <DashboardCard id="latest-screenings" title={<ScreeningsHeader />} padding={0}>
      <ScreeningsFriends />
      <ScreeningsChart />
    </DashboardCard>
  );
};
