import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { Dates } from 'constants/Dates';
import { Option } from 'components/common/Select/Select';
import * as S from './ScreeningsHeader.styles';

const statistics = ['Statistics 1', 'Statistics 2', 'Statistics 3'];

export const ScreeningsHeader: React.FC = () => {
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
    <Row gutter={[15, 15]} align="middle">
      <Col xs={24}>{t('dashboard.latestScreenings.title')}</Col>

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
  );
};
