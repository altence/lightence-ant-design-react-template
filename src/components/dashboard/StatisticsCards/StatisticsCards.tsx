import React, { useEffect, useMemo, useState } from 'react';
import { Col } from 'antd';
import { useResponsive } from 'hooks/useResponsive';
import { StatisticsCard } from './StatisticsCard/StatisticsCard';
import { getStatistics, Statistic } from 'api/statistics.api';
import { statistics as configStatistics } from 'constants/config/statistics';

export const StatisticsCards: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  const { isTablet } = useResponsive();

  useEffect(() => {
    let cleanupFunc = false;

    getStatistics().then((res) => !cleanupFunc && setStatistics(res));

    return () => {
      cleanupFunc = true;
    };
  }, []);

  const statisticsCards = useMemo(
    () =>
      statistics.map((st, index) => {
        const currentStatistic = configStatistics.find((el) => el.id === st.id);

        return currentStatistic ? (
          <Col key={st.id} xs={12} md={index === statistics.length - 1 ? 0 : 8} order={(isTablet && index + 1) || 0}>
            <StatisticsCard
              name={currentStatistic.name}
              value={st.value}
              prevValue={st.prevValue}
              color={currentStatistic.color}
              unit={st.unit}
              Icon={currentStatistic.Icon}
            />
          </Col>
        ) : null;
      }),
    [statistics, isTablet],
  );

  return <>{statisticsCards}</>;
};
