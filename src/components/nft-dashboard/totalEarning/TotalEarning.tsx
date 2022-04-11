import React, { useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { TotalEarningChart } from '@app/components/nft-dashboard/totalEarning/TotalEarningChart/TotalEarningChart';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { getTotalEarning, TotalEarning as ITotalEarning } from '@app/api/earnings.api';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice, getDifference } from '@app/utils/utils';
import * as S from './TotalEarning.styles';

export const TotalEarning: React.FC = () => {
  const [totalEarning, setTotalEarning] = useState<ITotalEarning | null>(null);

  const userId = useAppSelector((state) => state.user.user?.id);

  const { t } = useTranslation();

  useEffect(() => {
    userId && getTotalEarning(userId, 'USD').then((res) => setTotalEarning(res));
  }, [userId]);

  const { totalEarningData, days } = useMemo(
    () => ({
      totalEarningData: {
        data: totalEarning ? totalEarning.timeline.map((item) => item.usd_value) : [],
      },
      days: totalEarning ? totalEarning.timeline.map((item) => Dates.getDate(item.date).format('L')) : [],
    }),
    [totalEarning],
  );

  const isIncreased = Number(totalEarning?.total) > Number(totalEarning?.prevTotal);

  return (
    <NFTCard isSider>
      <Row gutter={[14, 14]}>
        <Col span={24}>
          <Row wrap={false} justify="space-between">
            <Col>
              <S.Title level={2}>{t('nft.totalEarning')}</S.Title>
            </Col>

            <Col>
              <S.ValueText $color={isIncreased ? 'success' : 'error'}>
                {isIncreased ? <CaretUpOutlined /> : <CaretDownOutlined />}{' '}
                {totalEarning && getDifference(totalEarning?.total, totalEarning?.prevTotal)}
              </S.ValueText>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row wrap={false} justify="space-between" gutter={[20, 20]}>
            <Col>
              <S.Text>{getCurrencyPrice(formatNumberWithCommas(totalEarning?.total ?? 0), 'USD')}</S.Text>
            </Col>

            <Col flex={1}>
              <TotalEarningChart xAxisData={days} earningData={totalEarningData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </NFTCard>
  );
};
