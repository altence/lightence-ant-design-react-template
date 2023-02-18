import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { TotalEarningChart } from '@app/components/nft-dashboard/totalEarning/TotalEarningChart/TotalEarningChart';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { getTotalEarning, TotalEarning as ITotalEarning } from '@app/api/earnings.api';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice, getDifference } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import * as S from './TotalEarning.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const TotalEarning: React.FC = () => {
  const [totalEarning, setTotalEarning] = useState<ITotalEarning | null>(null);

  const userId = useAppSelector((state) => state.user.user?.id);

  const { t } = useTranslation();

  useEffect(() => {
    userId && getTotalEarning(userId, CurrencyTypeEnum.USD).then((res) => setTotalEarning(res));
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
      <BaseRow gutter={[14, 14]}>
        <BaseCol span={24}>
          <BaseRow wrap={false} justify="space-between">
            <BaseCol>
              <S.Title level={2}>{t('nft.totalEarning')}</S.Title>
            </BaseCol>

            <BaseCol>
              <S.ValueText $color={isIncreased ? 'success' : 'error'}>
                {isIncreased ? <CaretUpOutlined /> : <CaretDownOutlined />}{' '}
                {totalEarning && getDifference(totalEarning?.total, totalEarning?.prevTotal)}
              </S.ValueText>
            </BaseCol>
          </BaseRow>
        </BaseCol>

        <BaseCol span={24}>
          <BaseRow wrap={false} justify="space-between" gutter={[20, 20]}>
            <BaseCol>
              <S.Text>
                {getCurrencyPrice(formatNumberWithCommas(totalEarning?.total ?? 0), CurrencyTypeEnum.USD)}
              </S.Text>
            </BaseCol>

            <BaseCol flex={1}>
              <TotalEarningChart xAxisData={days} earningData={totalEarningData} />
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </NFTCard>
  );
};
