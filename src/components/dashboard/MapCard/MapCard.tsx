import React, { useEffect, useState } from 'react';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { DoctorsMap } from './DoctorsMap/DoctorsMap';
import { Doctor, getDoctorsData } from 'api/doctors.api';

export const MapCard: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  return (
    <DashboardCard id="map" padding={0}>
      <DoctorsMap doctors={doctors} />
    </DashboardCard>
  );
};
