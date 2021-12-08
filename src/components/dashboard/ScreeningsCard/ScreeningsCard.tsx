import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScreeningsHeader } from './ScreeningsHeader/ScreeningsHeader';
import { ScreeningsFriends } from './ScreeningsFriends/ScreeningsFriends';
import { ScreeningsChart } from './ScreeningsChart/ScreeningsChart';
import { getScreenings, Screening } from 'api/screenings.api';
import { Dates } from 'constants/Dates';
import { getStatistics, Statistic } from 'api/statistics.api';
import * as S from './ScreeningsCard.styles';

export interface CurrentStatisticsState {
  firstUser: number;
  secondUser: number;
  month: number;
  statistic: number;
}

export const ScreeningsCard: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [screenings, setScreenings] = useState<Screening[]>([]);
  const [currentStatistics, setCurrentStatistics] = useState<CurrentStatisticsState>({
    firstUser: 1,
    secondUser: 3,
    month: Dates.getToday().get('month'),
    statistic: 2,
  });
  const [isFirstClick, setFirstClick] = useState(true);

  useEffect(() => {
    getScreenings().then((res) => setScreenings(res));
  }, []);

  useEffect(() => {
    getStatistics().then((res) => setStatistics(res));
  }, []);

  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  const values = useMemo(
    () =>
      months.map((month) => ({
        monthId: month,
        data: statistics.map((statistic) => ({
          statisticId: statistic.id,
          data: screenings.map((screening) => ({
            name: screening.name,
            data: Array.from({ length: 30 }, () => (Math.random() * 100).toFixed()),
          })),
        })),
      })),
    [months, screenings, statistics],
  );

  const currentValues = useMemo(
    () =>
      values
        .find((month) => month.monthId === currentStatistics.month)
        ?.data.find((statistic) => statistic.statisticId === currentStatistics.statistic)?.data,
    [currentStatistics.month, currentStatistics.statistic, values],
  );

  const getUserStatistic = useCallback(
    (isFirstUser: boolean) => {
      const user = isFirstUser ? 'firstUser' : 'secondUser'; // TODO we can simplify it to prop "user" and call function with props "firstUser" and "secondUser"

      return (
        currentValues && {
          name: screenings[currentStatistics[user]].name,
          data: currentValues[currentStatistics[user]].data,
        }
      );
    },
    [currentStatistics, currentValues, screenings],
  );

  return (
    <S.ScreeningsCard
      id="latest-screenings"
      title={<ScreeningsHeader currentStatistics={currentStatistics} setCurrentStatistics={setCurrentStatistics} />}
      padding={0}
    >
      <ScreeningsFriends
        screenings={screenings}
        currentStatistics={currentStatistics}
        setCurrentStatistics={setCurrentStatistics}
        isFirstClick={isFirstClick}
        setFirstClick={setFirstClick}
      />
      <ScreeningsChart firstUser={getUserStatistic(true)} secondUser={getUserStatistic(false)} />
    </S.ScreeningsCard>
  );
};
