import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { PaymentHistory } from './paymentHistory/PaymentHistory/PaymentHistory';
import { PaymentMethod } from './paymentMethod/PaymentMethod';
import { Card } from 'components/common/Card/Card';
import { useResponsive } from 'hooks/useResponsive';

export const Payments: React.FC = () => {
  const { isTablet } = useResponsive();

  const content = useMemo(
    () => (
      <Row gutter={[0, 30]}>
        <Col span={24}>
          <PaymentMethod />
        </Col>
        <Col span={24}>
          <PaymentHistory />
        </Col>
      </Row>
    ),
    [],
  );

  return isTablet ? <Card>{content}</Card> : content;
};
