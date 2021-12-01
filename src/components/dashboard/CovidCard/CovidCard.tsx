import { ChartData } from 'interfaces/interfaces';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CovidChart } from './CovidChart/CovidChart';

export const CovidCard: React.FC = () => {
  const [data] = useState<ChartData>([
    820, 600, 700, 400, 600, 800, 700, 750, 500, 600, 700, 600, 800, 500, 700, 800, 850, 600, 400, 300, 450, 700, 400,
    410, 420, 430, 480, 500, 360, 320,
  ]);

  const { t } = useTranslation();

  return (
    <DashboardCard id="covid" title={t('dashboard.covid')} padding={0}>
      <CovidChart data={data} />
    </DashboardCard>
  );
};
