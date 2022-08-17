import React, { useEffect, useMemo, useState } from 'react';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { DoctorsMap } from './DoctorsMap/DoctorsMap';
import { Doctor, getDoctorsData } from 'api/doctors.api';
import { useAppSelector } from '@app/hooks/reduxHooks';

export const MapCard: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  const theme = useAppSelector((state) => state.theme.theme);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const key = useMemo(() => Math.random(), [theme]); // create new key on every change of theme and remount map component

  return (
    <DashboardCard padding={0}>
      <DoctorsMap key={key} doctors={doctors} />
    </DashboardCard>
  );
};
