import { Col, Row } from 'antd';
import { BarChart } from 'components/charts/BarChart/BarChart';
import { LineChart } from 'components/charts/LineChart/LineChart';
import { PieChart } from 'components/charts/PieChart/PieChart';
import { RadarChart } from 'components/charts/RadarChart/RadarChart';
import { ScatterChart } from 'components/charts/ScatterChart/ScatterChart';
import { BoxplotChart } from 'components/charts/BoxplotChart/BoxplotChart';
import React from 'react';

const ChartsPage: React.FC = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} md={12}>
        <LineChart />
      </Col>
      <Col xs={24} md={12}>
        <BarChart />
      </Col>
      <Col xs={24} md={12}>
        <PieChart />
      </Col>
      <Col xs={24} md={12}>
        <BoxplotChart />
      </Col>
      <Col xs={24} md={12}>
        <ScatterChart />
      </Col>
      <Col xs={24} md={12}>
        <RadarChart />
      </Col>
    </Row>
  );
};

export default ChartsPage;
