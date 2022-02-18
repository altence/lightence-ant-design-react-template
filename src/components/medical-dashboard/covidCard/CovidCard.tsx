import React, { useEffect, useMemo, useState } from 'react';
import { getCovidData, CoronaData } from '@app/api/covid.api';
import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CovidChart } from './CovidChart';
import { Dates } from '@app/constants/Dates';
import { notification } from 'antd';
import { NotFound } from '@app/components/common/NotFound/NotFound';

export const CovidCard: React.FC = () => {
  const [data, setData] = useState<CoronaData[]>();

  const { t } = useTranslation();

  useEffect(() => {
    getCovidData()
      .then((res) => setData(res?.data.splice(0, 100).reverse()))
      .catch((e) => notification.error({ message: e.message }));
  }, []);

  const { confirmedArr, deathsArr, dateArr } = useMemo(() => {
    const confirmedArr: number[] = [];
    const deathsArr: number[] = [];
    const dateArr: string[] = [];

    data &&
      data?.forEach((el) => {
        confirmedArr.push(el.new_confirmed);
        deathsArr.push(el.new_deaths);
        dateArr.push(Dates.getDate(el.date).format('LL'));
      });

    return {
      confirmedArr,
      deathsArr,
      dateArr,
    };
  }, [data]);

  const { confirmed, deaths } = useMemo(
    () => ({
      confirmed: {
        title: t('medical-dashboard.covid.casesPerDay'),
        data: confirmedArr,
      },
      deaths: {
        title: t('medical-dashboard.covid.deaths'),
        data: deathsArr,
      },
    }),
    [confirmedArr, deathsArr, t],
  );

  return (
    <DashboardCard id="covid" title={t('medical-dashboard.covid.title')} padding={0}>
      {data ? <CovidChart confirmed={confirmed} deaths={deaths} dateArr={dateArr} /> : <NotFound />}
    </DashboardCard>
  );
};
