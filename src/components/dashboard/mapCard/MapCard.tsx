import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { DashboardCard } from '@app/components/dashboard/DashboardCard/DashboardCard';
import { DoctorsMap } from './DoctorsMap/DoctorsMap';
import { useAppSelector } from '@app/hooks/reduxHooks';

export const MapCard: React.FC = () => {
  const doctors = useAppSelector((state) => state.doctors.data);
  const theme = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const key = useMemo(() => Math.random(), [theme]); // create new key on every change of theme and remount map component

  return (
    <DashboardCard padding={0}>
      <DoctorsMap key={key} doctors={doctors} />
    </DashboardCard>
  );
};
