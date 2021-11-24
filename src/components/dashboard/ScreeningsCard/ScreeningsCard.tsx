import React, { useEffect, useState } from 'react';
import { ScreeningsHeader } from './ScreeningsHeader/ScreeningsHeader';
import { ScreeningsFriends } from './ScreeningsFriends/ScreeningsFriends';
import { ScreeningsChart } from './ScreeningsChart/ScreeningsChart';
import { getScreenings, Screening } from 'api/screenings.api';
import * as S from './ScreeningsCard.styles';

export interface CurrentStatisticsState {
  firstUser: number;
  secondUser: number;
  isFirstClick: boolean;
}

export const ScreeningsCard: React.FC = () => {
  const [screenings, setScreenings] = useState<Screening[]>([]);
  const [currentStatistics, setCurrentStatistics] = useState<CurrentStatisticsState>({
    firstUser: 1,
    secondUser: 3,
    isFirstClick: true,
  });

  useEffect(() => {
    getScreenings().then((res) => setScreenings(res));
  }, []);

  return (
    <S.ScreeningsCard id="latest-screenings" title={<ScreeningsHeader />} padding={0}>
      <ScreeningsFriends
        screenings={screenings}
        currentStatistics={currentStatistics}
        setCurrentStatistics={setCurrentStatistics}
      />
      <ScreeningsChart
        firstUser={screenings[currentStatistics.firstUser]}
        secondUser={screenings[currentStatistics.secondUser]}
      />
    </S.ScreeningsCard>
  );
};
