import React from 'react';
import { Col, Row } from 'antd';
import { MonthSelect } from '../../../components/common/MonthSelect';

export const CovidChartHeader: React.FC = () => {
  return (
    <Row align="middle" justify="space-between">
      <Col>COVID-19</Col>
      <Col>
        <MonthSelect />
      </Col>
    </Row>
  );
};
