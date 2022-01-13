import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { CurrentStatisticsState } from '../ScreeningsCard';
import { MonthSelect } from 'components/common/selects/MonthSelect/MonthSelect';
import { StatisticsSelect } from 'components/common/selects/StatisticsSelect/StatisticsSelect';

interface ScreeningsHeaderProps {
  currentStatistics: CurrentStatisticsState;
  setCurrentStatistics: (func: (state: CurrentStatisticsState) => CurrentStatisticsState) => void;
}

export const ScreeningsHeader: React.FC<ScreeningsHeaderProps> = ({ currentStatistics, setCurrentStatistics }) => {
  const { t } = useTranslation();

  return (
    <Row gutter={[0, { xs: 15, sm: 15, md: 20 }]} align="middle">
      <Col xs={24} xl={12}>
        {t('dashboard.latestScreenings.title')}
      </Col>

      <Col xs={24} xl={12}>
        <Row
          gutter={[
            { xs: 15, sm: 15, md: 20 },
            { xs: 15, sm: 15, md: 20 },
          ]}
        >
          <Col xs={12}>
            <MonthSelect
              value={currentStatistics.month}
              width="100%"
              bordered={false}
              shadow
              placeholder={t('dashboard.latestScreenings.month')}
              onChange={(month) => setCurrentStatistics((prev) => ({ ...prev, month }))}
            />
          </Col>

          <Col xs={12}>
            <StatisticsSelect
              value={currentStatistics.statistic}
              width="100%"
              bordered={false}
              shadow
              placeholder={t('dashboard.latestScreenings.statistics')}
              onChange={(statistic) => setCurrentStatistics((prev) => ({ ...prev, statistic }))}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
