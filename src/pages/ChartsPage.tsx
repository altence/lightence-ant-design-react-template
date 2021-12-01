import React from 'react';
import { Row, Col } from 'antd';
import { GradientStackedAreaChart } from 'components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { PieChart } from 'components/charts/PieChart/PieChart';
import { BarAnimationDelayChart } from 'components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from 'components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from 'components/charts/LineRaceChart/LineRaceChart';

const ChartsPage: React.FC = () => {
  return (
    <Row gutter={[30, 30]}>
      <Col xs={24}>
        <GradientStackedAreaChart />
      </Col>
      <Col xs={24}>
        <BarAnimationDelayChart />
      </Col>
      <Col xs={24} lg={12}>
        <PieChart />
      </Col>
      <Col xs={24} lg={12}>
        <ScatterChart />
      </Col>
      <Col xs={24}>
        <LineRaceChart />
      </Col>
    </Row>
  );
};

export default ChartsPage;
