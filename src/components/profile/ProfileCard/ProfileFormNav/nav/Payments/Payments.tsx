import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { PaymentHistory } from './PaymentHistory/PaymentHistory';
import { PaymentMethod } from './PaymentMethod/PaymentMethod';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';
import { Card } from 'components/common/Card/Card';

export const Payments: React.FC = () => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });

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

  return isTablet ? <Card padding={(isDesktop && [60, 54]) || '0'}>{content}</Card> : content;
};
