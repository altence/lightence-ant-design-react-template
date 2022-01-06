import React, { useEffect, useMemo, useState } from 'react';
import { getCovidData, CoronaData } from '@app/api/covid.api';
import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CovidChart } from './CovidChart/CovidChart';
import { Dates } from '@app/constants/Dates';
import { notification } from 'antd';

export const CovidCard: React.FC = () => {
  const [data, setData] = useState<CoronaData[]>();

  const { t } = useTranslation();

  useEffect(() => {
    getCovidData()
      .then((res) => setData(res?.data.reverse()))
      .catch((e) => notification.error({ message: e.message }));
  }, []);

  const { data1, data2, data3, xData } = useMemo(() => {
    const data1: number[] = [];
    const data2: number[] = [];
    const data3: number[] = [];
    const xData: string[] = [];

    data &&
      data?.forEach((el) => {
        data1.push(el.new_confirmed);
        data2.push(el.new_deaths);
        data3.push(el.new_recovered);
        xData.push(Dates.getDate(el.date).format('LL'));
      });

    return {
      data1: {
        title: t('dashboard.covid.casesPerDay'),
        data: data1,
      },
      data2: {
        title: t('dashboard.covid.deaths'),
        data: data2,
      },
      data3: {
        title: t('dashboard.covid.recovered'),
        data: data3,
      },
      xData,
    };
  }, [data, t]);

  return (
    <DashboardCard id="covid" title={t('dashboard.covid.title')} padding={0}>
      {data && <CovidChart data1={data1} data2={data2} data3={data3} xData={xData} />}
    </DashboardCard>
  );
};
