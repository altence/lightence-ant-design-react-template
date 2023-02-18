import React, { useEffect, useMemo, useState } from 'react';
import { getCovidData, CoronaData } from '@app/api/covid.api';
import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CovidChart } from './CovidChart';
import { Dates } from '@app/constants/Dates';
import { NotFound } from '@app/components/common/NotFound/NotFound';
import { notificationController } from '@app/controllers/notificationController';

export const CovidCard: React.FC = () => {
  const [data, setData] = useState<CoronaData>();

  const { t } = useTranslation();

  useEffect(() => {
    getCovidData()
      .then((res) => setData(res))
      .catch((e) => notificationController.error({ message: e.message }));
  }, []);

  const { confirmedArr, deathsArr, dateArr } = useMemo(() => {
    const confirmedArr: number[] = Object.values(data?.cases || {}).splice(0, 100);
    const deathsArr: number[] = Object.values(data?.deaths || {}).splice(0, 100);
    const dateArr: string[] = Object.keys(data?.cases || {})
      .map((value) => Dates.getDate(value).format('LL'))
      .splice(0, 100);

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
