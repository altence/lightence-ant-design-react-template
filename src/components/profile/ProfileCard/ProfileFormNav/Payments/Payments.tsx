import React from 'react';
import { Col, Row } from 'antd';
import { PaymentHistory } from './PaymentHistory/PaymentHistory';
import { PaymentMethod } from './PaymentMethod/PaymentMethod';

export const Payments: React.FC = () => (
  <Row gutter={[0, 20]}>
    <Col span={24}>
      <PaymentMethod />
    </Col>
    <Col span={24}>
      <PaymentHistory />
    </Col>
  </Row>
);
