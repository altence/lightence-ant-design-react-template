import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScreeningsHeader } from './ScreeningsHeader/ScreeningsHeader';
import { ScreeningsFriends } from './ScreeningsFriends/ScreeningsFriends';
import { ScreeningsChart } from './ScreeningsChart/ScreeningsChart';
import { getScreenings, Screening } from 'api/screenings.api';
import { Dates } from 'constants/Dates';
import { getStatistics, Statistic } from 'api/statistics.api';
import { getSmoothRandom } from 'utils/utils';
import { Doctor, getDoctorsData } from 'api/doctors.api';
import * as S from './ScreeningsCard.styles';

export interface CurrentStatisticsState {
  firstUser: number;
  secondUser: number;
  month: number;
  statistic: number;
}

export type ScreeningWithDoctors = Screening & { name: string; imgUrl: string };

export const ScreeningsCard: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
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

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  const screeningsWithDoctors = useMemo((): ScreeningWithDoctors[] => {
    return screenings.map((screening) => {
      const currentDoctor = doctors.find((doctor) => doctor.id === screening.id);

      return {
        ...screening,
        name: currentDoctor?.name || '',
        imgUrl: currentDoctor?.imgUrl || '',
      };
    });
  }, [doctors, screenings]);

  const generateScreeningValue = () => {
    const randomValue = getSmoothRandom(3, 0.7) * 100;
    return (randomValue * Math.abs(Math.sin(randomValue))).toFixed();
  };

  const values = useMemo(
    () =>
      months.map((month) => ({
        monthId: month,
        data: statistics.map((statistic) => ({
          statisticId: statistic.id,
          data: screenings.map((screening) => ({
            id: screening.id,
            data: Array.from({ length: 16 }, (_, index) => ({
              day: index * 2,
              value: generateScreeningValue(),
            })),
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
      const user = isFirstUser ? 'firstUser' : 'secondUser';

      return (
        currentValues && {
          name: screeningsWithDoctors[currentStatistics[user]].name,
          data: currentValues[currentStatistics[user]].data,
        }
      );
    },
    [currentStatistics, currentValues, screeningsWithDoctors],
  );

  return (
    <S.ScreeningsCard
      title={<ScreeningsHeader currentStatistics={currentStatistics} setCurrentStatistics={setCurrentStatistics} />}
      padding={0}
    >
      <ScreeningsFriends
        screenings={screeningsWithDoctors}
        currentStatistics={currentStatistics}
        setCurrentStatistics={setCurrentStatistics}
        isFirstClick={isFirstClick}
        setFirstClick={setFirstClick}
      />
      <ScreeningsChart firstUser={getUserStatistic(true)} secondUser={getUserStatistic(false)} />
    </S.ScreeningsCard>
  );
};
