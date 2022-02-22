import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { Card } from '@app/components/common/Card/Card';
import { TotalEarningChart } from '@app/components/NFT/totalEarning/TotalEarningChart/TotalEarningChart';
import { TotalEarningInfo } from '@app/components/NFT/totalEarning/TotalEarningInfo/TotalEarningInfo';
import { Dates } from '@app/constants/Dates';

export const TotalEarning: React.FC = () => {
  const nftData = useMemo(
    () => ({
      name: 'nft',
      data: [100, 250, 370, 300, 260, 230, 270],
    }),
    [],
  );

  const otherData = useMemo(
    () => ({
      name: 'other',
      data: [144, 122, 270, 292, 320, 167, 140],
    }),
    [],
  );

  const days = Dates.getDays();

  const totalEarning =
    nftData.data.reduce((acc, nextValue) => acc + nextValue, 0) +
    otherData.data.reduce((acc, nextValue) => acc + nextValue, 0);

  return (
    <Card autoHeight={false} padding={20}>
      <Row wrap={false}>
        <Col span={10}>
          <TotalEarningInfo value={totalEarning} />
        </Col>

        <Col span={14}>
          <TotalEarningChart xAxisData={days} firstLine={nftData} secondLine={otherData} />
        </Col>
      </Row>
    </Card>
  );
};
