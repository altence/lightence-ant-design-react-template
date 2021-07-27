import React from 'react';
import { Col, Row } from 'antd';
import { MonthSwitch } from '../../../../components/common/MonthSwitch';

export const HealthChartHeader: React.FC = () => {
  return (
    <Row justify="space-between" align="middle">
      <Col>Health</Col>
      <Col>
        <MonthSwitch />
      </Col>
    </Row>
  );
};
