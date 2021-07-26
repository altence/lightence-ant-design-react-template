import React from 'react';
import { Col, Row } from 'antd';
import { MonthSwitch } from '../../../components/common/MonthSwitch';

export const ActivityChartHeader: React.FC = () => {
  return (
    <Row justify="space-between">
      <Col>Activity</Col>
      <Col>
        <MonthSwitch />
      </Col>
    </Row>
  );
};
