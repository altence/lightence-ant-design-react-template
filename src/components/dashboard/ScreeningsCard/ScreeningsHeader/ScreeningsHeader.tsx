import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { Dates } from 'constants/Dates';
import { Option } from 'components/common/Select/Select';
import * as S from './ScreeningsHeader.styles';
import { useResponsive } from 'hooks/useResponsive';

const statistics = ['Statistics 1', 'Statistics 2', 'Statistics 3'];

export const ScreeningsHeader: React.FC = () => {
  const { isTablet } = useResponsive();

  const { t } = useTranslation();

  const months = Dates.getMonths();

  const monthsOptions = useMemo(
    () =>
      months.map((month) => (
        <Option key={month} value={month}>
          {month}
        </Option>
      )),
    [months],
  );

  const statisticsOptions = useMemo(
    () =>
      statistics.map((statistic) => (
        <Option key={statistic} value={statistic}>
          {statistic}
        </Option>
      )),
    [],
  );

  return (
    <Row gutter={isTablet ? [0, 20] : [0, 15]} align="middle">
      <Col xs={24} xl={16}>
        {t('dashboard.latestScreenings.title')}
      </Col>

      <Col xs={24} xl={8}>
        <Row gutter={isTablet ? [20, 20] : [15, 15]}>
          <Col xs={12}>
            <S.ScreeningsSelect bordered={false} placeholder={t('dashboard.latestScreenings.month')}>
              {monthsOptions}
            </S.ScreeningsSelect>
          </Col>

          <Col xs={12}>
            <S.ScreeningsSelect bordered={false} placeholder={t('dashboard.latestScreenings.statistics')}>
              {statisticsOptions}
            </S.ScreeningsSelect>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
