import React from 'react';
import { useTranslation } from 'react-i18next';
import { CurrentStatisticsState } from '../ScreeningsCard/ScreeningsCard';
import { MonthSelect } from 'components/common/selects/MonthSelect/MonthSelect';
import { StatisticsSelect } from 'components/common/selects/StatisticsSelect/StatisticsSelect';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

interface ScreeningsHeaderProps {
  currentStatistics: CurrentStatisticsState;
  setCurrentStatistics: (func: (state: CurrentStatisticsState) => CurrentStatisticsState) => void;
}

export const ScreeningsHeader: React.FC<ScreeningsHeaderProps> = ({ currentStatistics, setCurrentStatistics }) => {
  const { t } = useTranslation();

  return (
    <BaseRow gutter={[0, { xs: 15, sm: 15, md: 20 }]} align="middle">
      <BaseCol xs={24} xl={12}>
        {t('medical-dashboard.latestScreenings.title')}
      </BaseCol>

      <BaseCol xs={24} xl={12}>
        <BaseRow
          gutter={[
            { xs: 15, sm: 15, md: 20 },
            { xs: 15, sm: 15, md: 20 },
          ]}
        >
          <BaseCol xs={12}>
            <label>
              <MonthSelect
                value={currentStatistics.month}
                width="100%"
                bordered={false}
                shadow
                placeholder={t('medical-dashboard.latestScreenings.month')}
                onChange={(month) => setCurrentStatistics((prev) => ({ ...prev, month } as CurrentStatisticsState))}
              />
            </label>
          </BaseCol>

          <BaseCol xs={12}>
            <label>
              <StatisticsSelect
                value={currentStatistics.statistic}
                width="100%"
                bordered={false}
                shadow
                placeholder={t('medical-dashboard.latestScreenings.statistics')}
                onChange={(statistic) =>
                  setCurrentStatistics((prev) => ({ ...prev, statistic } as CurrentStatisticsState))
                }
              />
            </label>
          </BaseCol>
        </BaseRow>
      </BaseCol>
    </BaseRow>
  );
};
