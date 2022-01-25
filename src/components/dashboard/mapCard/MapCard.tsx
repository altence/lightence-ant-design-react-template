import React, { useEffect, useMemo, useState } from 'react';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { DoctorsMap } from './DoctorsMap/DoctorsMap';
import { Doctor, getDoctorsData } from 'api/doctors.api';
import { useTheme } from 'styled-components';

export const MapCard: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  const theme = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const key = useMemo(() => Math.random(), [theme]); // create new key on every change of theme and remount map component

  return (
    <DashboardCard padding={0}>
      <DoctorsMap key={key} doctors={doctors} />
    </DashboardCard>
  );
};
