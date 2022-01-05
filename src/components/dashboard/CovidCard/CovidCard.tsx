import React, { useEffect, useState } from 'react';
import { getCovidData, CoronaData } from '@app/api/covid.api';
import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CovidChart } from './CovidChart/CovidChart';
import { Dates } from '@app/constants/Dates';

export const CovidCard: React.FC = () => {
  const [data, setData] = useState<CoronaData[]>();

  const { t } = useTranslation();

  useEffect(() => {
    getCovidData().then((res) => setData(res?.data.reverse()));
  }, []);

  return (
    <DashboardCard id="covid" title={t('dashboard.covid.title')} padding={0}>
      <CovidChart
        data={data?.map((el) => el.new_confirmed)}
        data2={data?.map((el) => el.new_deaths)}
        data3={data?.map((el) => el.new_recovered)}
        xData={data?.map((el) => Dates.getDate(el.date).format('LL'))}
      />
    </DashboardCard>
  );
};
