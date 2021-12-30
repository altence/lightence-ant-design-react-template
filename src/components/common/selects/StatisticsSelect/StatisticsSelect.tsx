import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Option, Select, SelectProps } from '../Select/Select';
import { getStatistics, Statistic } from 'api/statistics.api';
import { statistics as configStatistics } from 'constants/config/statistics';

export const StatisticsSelect: React.FC<SelectProps> = ({ className, ...props }) => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  useEffect(() => {
    getStatistics().then((res) => setStatistics(res));
  }, []);

  const { t } = useTranslation();

  const statisticsOptions = useMemo(
    () =>
      statistics.map((statistic) => {
        const currentStatistic = configStatistics.find((configStat) => configStat.id === statistic.id);

        return (
          <Option key={statistic.id} value={statistic.id}>
            {t(currentStatistic?.title || '')}
          </Option>
        );
      }),
    [statistics, t],
  );

  return (
    <Select className={className} {...props}>
      {statisticsOptions}
    </Select>
  );
};
