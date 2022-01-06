import React, { useEffect, useMemo, useState } from 'react';
import { getCovidData, CoronaData } from '@app/api/covid.api';
import { useTranslation } from 'react-i18next';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CovidChart } from './CovidChart/CovidChart';
import { Dates } from '@app/constants/Dates';
import { notification } from 'antd';
import { NotFound } from '@app/components/common/NotFound/NotFound';

export const CovidCard: React.FC = () => {
  const [data, setData] = useState<CoronaData[]>();

  const { t } = useTranslation();

  useEffect(() => {
    getCovidData()
      .then((res) => setData(res?.data.reverse()))
      .catch((e) => notification.error({ message: e.message }));
  }, []);

  const { confirmedArr, deathsArr, recoveredArr, dateArr } = useMemo(() => {
    const confirmedArr: number[] = [];
    const deathsArr: number[] = [];
    const recoveredArr: number[] = [];
    const dateArr: string[] = [];

    data &&
      data?.forEach((el) => {
        confirmedArr.push(el.new_confirmed);
        deathsArr.push(el.new_deaths);
        recoveredArr.push(el.new_recovered);
        dateArr.push(Dates.getDate(el.date).format('LL'));
      });

    return {
      confirmedArr: {
        title: t('dashboard.covid.casesPerDay'),
        data: confirmedArr,
      },
      deathsArr: {
        title: t('dashboard.covid.deaths'),
        data: deathsArr,
      },
      recoveredArr: {
        title: t('dashboard.covid.recovered'),
        data: recoveredArr,
      },
      dateArr,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <DashboardCard id="covid" title={t('dashboard.covid.title')} padding={0}>
      {data ? (
        <CovidChart confirmedArr={confirmedArr} deathsArr={deathsArr} recoveredArr={recoveredArr} dateArr={dateArr} />
      ) : (
        <NotFound />
      )}
    </DashboardCard>
  );
};
