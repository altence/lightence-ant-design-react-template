import React from 'react';
import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './TotalEarningInfo.styles';

const { Text } = Typography;

interface TotalEarningInfoProps {
  value: number;
}

export const TotalEarningInfo: React.FC<TotalEarningInfoProps> = ({ value }) => {
  const { t } = useTranslation();

  return (
    <Row gutter={[14, 14]}>
      <Col span={24}>
        <S.Title level={5}>{t('nft.totalEarning')}</S.Title>
      </Col>

      <Col span={24}>
        <Text>{getCurrencyPrice(formatNumberWithCommas(value), 'USD')}</Text>
      </Col>
    </Row>
  );
};
