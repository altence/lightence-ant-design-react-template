import { ChartData } from 'interfaces/interfaces';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CovidChart } from './CovidChart/CovidChart';

export const CovidCard: React.FC = () => {
  const [data] = useState<ChartData>([0, 0, 500, 21424, 30205, 22304, 43242, 61935, 43352, 42146, 70241, 72273]);

  const { t } = useTranslation();

  return (
    <DashboardCard id="covid" title={t('dashboard.covid')} padding={0}>
      <CovidChart data={data} />
    </DashboardCard>
  );
};
