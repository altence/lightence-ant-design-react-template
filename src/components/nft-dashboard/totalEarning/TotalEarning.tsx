import React, { useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { NFTCard } from '@app/components/nft-dashboard/NFTCard/NFTCard';
import { TotalEarningChart } from '@app/components/nft-dashboard/totalEarning/TotalEarningChart/TotalEarningChart';
import { TotalEarningInfo } from '@app/components/nft-dashboard/totalEarning/TotalEarningInfo/TotalEarningInfo';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Earning, getNFTEarnings, getOtherEarnings } from '@app/api/earnings.api';
import { Dates } from '@app/constants/Dates';

export const TotalEarning: React.FC = () => {
  const [NFTEarnings, setNFTEarnings] = useState<Earning[]>([]);
  const [otherEarnings, setOtherEarnings] = useState<Earning[]>([]);

  const userId = useAppSelector((state) => state.user.user?.id);
  const { t } = useTranslation();

  useEffect(() => {
    userId && getNFTEarnings(userId).then((res) => setNFTEarnings(res));
  }, [userId]);

  useEffect(() => {
    userId && getOtherEarnings(userId).then((res) => setOtherEarnings(res));
  }, [userId]);

  const { totalEarning, nftData, otherData, days } = useMemo(
    () => ({
      totalEarning:
        NFTEarnings.reduce((acc, nextValue) => acc + nextValue.value, 0) +
        otherEarnings.reduce((acc, nextValue) => acc + nextValue.value, 0),
      nftData: {
        name: t('nft.nft'),
        data: NFTEarnings.map((item) => item.value),
      },
      otherData: {
        name: t('nft.other'),
        data: otherEarnings.map((item) => item.value),
      },
      days: NFTEarnings.map((item) => Dates.getDate(item.date).format('L')), // We can use any of arrays, they return last 7 days
    }),
    [NFTEarnings, otherEarnings, t],
  );

  return (
    <NFTCard>
      <Row wrap={false}>
        <Col span={10}>
          <TotalEarningInfo value={totalEarning} />
        </Col>

        <Col span={14}>
          <TotalEarningChart xAxisData={days} firstLine={nftData} secondLine={otherData} />
        </Col>
      </Row>
    </NFTCard>
  );
};
