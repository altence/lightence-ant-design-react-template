import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import * as S from './TotalEarningInfo.styles';

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
        <S.Text>{getCurrencyPrice(formatNumberWithCommas(value), 'USD')}</S.Text>
      </Col>
    </Row>
  );
};
