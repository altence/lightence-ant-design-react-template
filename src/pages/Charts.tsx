import { Col, Row } from 'antd';
import { BarChart } from 'components/charts/BarChart/BarChart';
import { LineChart } from 'components/charts/LineChart/LineChart';
import { PieChart } from 'components/charts/PieChart/PieChart';
import MainLayout from 'components/layouts/MainLayout';
import React from 'react';

const Charts: React.FC = () => {
  return (
    <MainLayout>
      <Row>
        <Col span={24}>
          <LineChart />
        </Col>
        <Col span={24}>
          <BarChart />
        </Col>
        <Col span={24}>
          <PieChart />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Charts;
